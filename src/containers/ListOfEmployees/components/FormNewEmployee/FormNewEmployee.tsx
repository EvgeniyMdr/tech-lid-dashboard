import { DialogTitle } from "@mui/material";
import { FC } from "react";
import { Modal } from "../../../../components/Modal";
interface IFormNewEmployee {
  isOpen: boolean;
  handleClose: () => void;
  onSubmit: () => void;
}
const FormNewEmployee: FC<IFormNewEmployee> = ({
  isOpen,
  handleClose,
  onSubmit,
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <DialogTitle>Форма создания сотрудника</DialogTitle>
    </Modal>
  );
};

export default FormNewEmployee;
