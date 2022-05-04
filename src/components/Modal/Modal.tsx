import { Dialog } from "@mui/material";
import { FC } from "react";
import styles from "./Modal.module.scss";

interface IModal {
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element;
}

const Modal: FC<IModal> = ({ isOpen, handleClose, children }) => {
  return (
    <Dialog className={styles.wrapper} open={isOpen} onClose={handleClose}>
      {children}
    </Dialog>
  );
};

export default Modal;
