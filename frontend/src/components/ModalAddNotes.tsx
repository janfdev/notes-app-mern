import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import axiosInstance from "@/utils/axiosInstance";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import TagInput from "./input/TagInput";
import { toast } from "react-toastify";

type NoteData = {
  _id: string;
  title: string;
  content: string;
  tags: string[];
};

type ModalProps = {
  noteData?: NoteData | null;
  type?: "add" | "edit";
  getAllNotes: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export function ModalAddNotes({
  noteData,
  type = "add",
  getAllNotes,
  isOpen,
  setIsOpen,
}: ModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setTags([]);
    setError(null);
  };

  useEffect(() => {
    if (isOpen) {
      if (type === "edit" && noteData) {
        setTitle(noteData.title);
        setContent(noteData.content);
        setTags(noteData.tags);
      } else {
        resetForm();
      }
    }
  }, [isOpen, type, noteData]);

  const handleSubmit = async () => {
    if (!title || !content) {
      setError("Title and content are required");
      return;
    }

    try {
      if (type === "edit" && noteData?._id) {
        await axiosInstance.put(`/notes/${noteData._id}`, {
          title,
          content,
          tags,
        });
        toast.success("Note Updated Successfully");
      } else {
        await axiosInstance.post("/notes", {
          title,
          content,
          tags,
        });
        toast.success("Note Added Successfully");
      }

      getAllNotes();
      setIsOpen(false);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data?.message || "Something went wrong");
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {type === "edit" ? "Edit Note" : "Add Note"}
            </DialogTitle>
            <DialogDescription>
              {type === "edit"
                ? "Update your existing note."
                : "Add a new note to your collection."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                placeholder="Input your notes"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                placeholder="Input your content here"
                rows={6}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label>Tags</Label>
              <TagInput tags={tags} setTags={setTags} />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSubmit}>
              {type === "edit" ? "Update" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
