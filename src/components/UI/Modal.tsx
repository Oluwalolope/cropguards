import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children: React.ReactNode,
    open: boolean,
    onClose: () => void,
    className?: string
};

const Modal = ({children, open, onClose, className = 'm-auto rounded-xl p-4'}: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    useEffect(() => {
        const modal = dialogRef.current;

        if (open) {
            modal!.showModal();
        }

        return () => modal!.close();
    }, [open])

    return createPortal(
        <dialog ref={dialogRef} className={className} onClose={onClose}>
            <button className="block ml-auto cursor-pointer hover:text-red-400 transition-all duration-300 ease-out" onClick={onClose}>
                <X />
            </button>
            {children}
        </dialog>, 
        document.getElementById('modal')!
    );
}
 
export default Modal;