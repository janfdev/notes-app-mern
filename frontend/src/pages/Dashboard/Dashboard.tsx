import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/cards/NoteCard";
import Navbar from "../../components/NavbarDashboard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axiosInstance from "../../utils/axiosInstance";
import axios, { AxiosError } from "axios";
import { UserInfo } from "../../utils/types/types";
import EmptyCard from "../../components/section/EmptyCard";
import noteEmpty from "../../assets/image/note-empty.svg";
import noData from "../../assets/image/no-data.svg";
import { ModalAddNotes } from "@/components/dialogs/ModalAddNotes";
import { Button } from "@/components/ui/button";

type Note = {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  isPinned: boolean;
  createdOn: string;
};

type ModalState = {
  isShow: boolean;
  type: "add" | "edit";
  data?: Note | null;
};

const Dashboard: React.FC = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState<ModalState>({
    isShow: false,
    type: "add",
    data: null,
  });

  const [allNotes, setAllNotes] = useState<Note[]>([]);

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const [isSearch, setIsSearch] = useState<boolean>(false);

  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  const navigate = useNavigate();

  // Handle Edit
  const handleEdit = (noteDetails: Note) => {
    setOpenAddEditModal({
      isShow: true,
      data: noteDetails,
      type: "edit",
    });
  };

  // Get user info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/api/users/me");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
        console.log("User response", response.data.user);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<{ message: string }>;
        if (err.response?.data?.message) {
          console.error(err.response.data.message);
          console.log("User response", err);
          navigate("/");
        } else {
          console.error(
            "An unexpected error occurred while fetching user info."
          );
        }
      }
    }
  };

  // Get all notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/api/notes/");

      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An uxpected error occurred. Please try again", error);
    }
  };

  // Delete Notes
  const deleteNotes = async (noteId: string) => {
    try {
      const response = await axiosInstance.delete(`/api/notes/${noteId}`);

      if (response.data && !response.data.error) {
        getAllNotes();
        toast.error("Deleted Successfully");
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      if (err.response && err.response.data && err.response.data.message) {
        console.error(err.response.data.message);
      }
    }
  };

  // Update pin
  const updatePinned = async (noteData: Note) => {
    try {
      const response = await axiosInstance.patch(
        `/api/notes/${noteData._id}/pin`,
        {
          isPinned: !noteData.isPinned,
        }
      );

      if (response.data && !response.data.error) {
        setRefreshTrigger((prev) => prev + 1);

        if (noteData.isPinned) {
          toast.success("Note Unpinned");
        } else {
          toast.success("Note Pinned");
        }
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.error(error);
    }
  };

  // Search for a note
  const onSearchNote = async (query: string) => {
    try {
      const response = await axiosInstance.get("/api/notes/search", {
        params: { query },
      });

      if (response.data && response.data.notes) {
        setIsSearch(true);
        setAllNotes(response.data.notes);
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.log(error);
    }
  };

  const handleClearSearch = () => {
    setIsSearch(false);
    getAllNotes();
  };

  useEffect(() => {
    getAllNotes();
    getUserInfo();
  }, [refreshTrigger]);

  return (
    <>
      <Navbar
        userInfo={userInfo}
        onSearchNote={onSearchNote}
        handleClearSearch={handleClearSearch}
      />

      <div className="container mx-auto">
        {allNotes.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {allNotes.map((item) => (
              <NoteCard
                key={item._id}
                title={item.title}
                content={item.content}
                date={item.createdOn}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={() => {
                  handleEdit(item);
                }}
                onDelete={() => {
                  deleteNotes(item._id);
                }}
                onPinNote={() => {
                  updatePinned(item);
                }}
              />
            ))}
          </div>
        ) : (
          <EmptyCard
            imgSrc={isSearch ? noData : noteEmpty}
            message={
              isSearch
                ? `Oops! No notes found matching your search.`
                : `Start creating your first note! Click the 'Add' button to jot down your toughts, ideas, and reminders, Let's get started!`
            }
          />
        )}
      </div>
      <ModalAddNotes
        isOpen={openAddEditModal.isShow}
        setIsOpen={(open) =>
          setOpenAddEditModal((prev) => ({ ...prev, isShow: open }))
        }
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        getAllNotes={getAllNotes}
      />

      <div className="m-4 fixed right-5 bottom-3 z-40">
        <Button
          size={"big"}
          onClick={() =>
            setOpenAddEditModal({ isShow: true, type: "add", data: null })
          }
        >
          <MdAdd className="size-6" />
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
