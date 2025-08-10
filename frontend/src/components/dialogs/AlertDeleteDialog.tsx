import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";

type ConfirmDeleteDialogProps = {
  title?: string;
  description?: string;
  onConfirm: () => void;
  isOpen: boolean;
  openChange: (open: boolean) => void;
};

const ConfirmDeleteDialog = ({
  isOpen,
  openChange,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will permanently delete your note",
  onConfirm,
}: ConfirmDeleteDialogProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={openChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-center">
            <div className="bg-red-500 w-20 text-center py-5 flex items-center justify-center rounded-md">
              <Trash/>
            </div>
          </div>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-500 text-white hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDeleteDialog;
