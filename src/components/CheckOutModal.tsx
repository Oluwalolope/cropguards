import CheckOut from "./CheckOut";
import Modal from "./UI/Modal";

type CheckModalProps = {
    isOpen: boolean,
    handleClose: () => void
}

const CheckOutModal = ({ isOpen, handleClose }:CheckModalProps) => {
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <CheckOut />
        </Modal>
    );
}
 
export default CheckOutModal;