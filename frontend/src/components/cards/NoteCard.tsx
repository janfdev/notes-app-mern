import { MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";
import { Button } from "../ui/button";
import { CiStar } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { TooltipDesc } from "../ui/tooltipDesc";
import ConfirmDeleteDialog from "../dialogs/AlertDeleteDialog";
import { useState } from "react";

type NoteCardProps = {
  title: string;
  date: string;
  content: string;
  tags: string[];
  isPinned: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onPinNote: () => void;
};

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}: NoteCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Card className="border rounded-md  md:mx-0 mx-5 hover:shadow-2xl transition-all ease-in-out">
      <CardHeader
        className="flex items-center justify-between
      "
      >
        <div>
          <CardTitle className="font-poppins text-lg capitalize text-wrap line-clamp-3">
            {title?.slice(0, 25)}
          </CardTitle>
          <CardDescription className="text-xs capitalize dark:text-primary">
            {moment(date).fromNow()} • {moment(date).format("DD MMM YYYY")}
          </CardDescription>
        </div>
        <button
          className={`text-xl text-primary cursor-pointer rounded-full border border-primary w-10 h-10 flex items-center justify-center ${
            isPinned
              ? "text-yellow-500 fill-yellow-400 border-yellow-500 bg-yellow-200"
              : "text-black border-black hover:text-yellow-500 hover:border-yellow-500"
          }`}
          onClick={onPinNote}
        >
          <CiStar className="size-6" />
        </button>
      </CardHeader>

      <CardContent className="text-wrap capitalize text-xs mt-2">
        {content?.slice(0, 60)}
      </CardContent>
      <CardFooter className="flex items-center justify-between mt-2">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Badge variant={"outline"} key={index} className="border-2">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"default"}
                onClick={onEdit}
                className="cursor-pointer
              "
              >
                <MdCreate />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit Note</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive" onClick={() => setIsOpen(true)}>
                <MdDelete />
              </Button>
            </TooltipTrigger>
            <TooltipDesc>
              <p>Delete Note</p>
            </TooltipDesc>
          </Tooltip>

          <ConfirmDeleteDialog
            isOpen={isOpen}
            openChange={setIsOpen}
            onConfirm={onDelete}
          ></ConfirmDeleteDialog>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
