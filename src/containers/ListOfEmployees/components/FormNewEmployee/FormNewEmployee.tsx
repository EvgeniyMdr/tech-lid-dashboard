import { DialogTitle, Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FC } from "react";
import { Modal } from "@/components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema, IInitialValues } from "./formData";
import styles from "./FormNewEmployee.module.scss";
import { ICreateEmployee } from "@/models/user";
interface IFormNewEmployee {
  isOpen: boolean;
  handleClose: () => void;
  onSubmit: (user: ICreateEmployee) => void;
}
const FormNewEmployee: FC<IFormNewEmployee> = ({
  isOpen,
  handleClose,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInitialValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleCloseHandler = () => {
    reset();
    handleClose();
  };

  const submitHandler = (user: ICreateEmployee) => {
    reset();
    onSubmit(user);
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleCloseHandler}>
      <Box
        className={styles.form}
        component={"form"}
        onSubmit={handleSubmit(submitHandler)}
      >
        <DialogTitle>Форма создания сотрудника</DialogTitle>
        <TextField
          {...register("name")}
          type="text"
          label="ФИО"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("positionAtWork")}
          type="text"
          label="Должность"
          error={!!errors.positionAtWork?.message}
          helperText={errors.positionAtWork?.message}
        />
        <TextField
          {...register("avatar")}
          type="text"
          label="Ссылка на аватар"
          error={!!errors.avatar?.message}
          helperText={errors.avatar?.message}
        />
        <LoadingButton loading={false} type="submit" variant="contained">
          Создать
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default FormNewEmployee;
