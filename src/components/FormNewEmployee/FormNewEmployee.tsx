import { DialogTitle, Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema, IInitialValues } from "./formData";
import styles from "./FormNewEmployee.module.scss";
import { IShortEmployeeData } from "@/models/user";
import { InputMultipleData } from "@/components/InputMultipleData";
interface IFormNewEmployee {
  onSubmit: (user: IShortEmployeeData) => void;
}
const FormNewEmployee: FC<IFormNewEmployee> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInitialValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const submitHandler = (user: IShortEmployeeData) => {
    reset();
    onSubmit(user);
  };

  return (
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
      <InputMultipleData
        onChange={(skills) => {
          console.log("skills", skills);
        }}
      />
      <LoadingButton loading={false} type="submit" variant="contained">
        Создать
      </LoadingButton>
    </Box>
  );
};

export default FormNewEmployee;
