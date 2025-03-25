import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MoreHorizontal, X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  trigger?: ReactNode;
  children: ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Modal = ({ trigger, children, open, onOpenChange }: ModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent className="bg-white w-[673.99px] h-[414px] max-w-[95vw] max-h-[95vh] rounded-xl p-6">
        <div className="flex justify-between items-start mb-4">
          <img src="/images/icons/icon-config.svg" alt="icon-config" />
          <AlertDialogCancel asChild>
            <button className="justify-center hover:bg-gray-100">
              <img src="/images/icons/icon-cancel.svg" alt="icon-cancel" />
            </button>
          </AlertDialogCancel>
        </div>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
