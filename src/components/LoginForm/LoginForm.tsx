import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { validationSchema, IInitialValues } from "./formData";
import styles from "./LoginForm.module.scss";

interface ILoginForm {
  onSubmit: (val: any) => void;
  isSubmittingForm: boolean;
}

const LoginForm: FC<ILoginForm> = ({ onSubmit, isSubmittingForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInitialValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  return (
    <Box
      className={styles.form}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        {...register("login")}
        type="email"
        label="Email"
        error={!!errors.login?.message}
        helperText={errors.login?.message}
      />
      <TextField
        {...register("password")}
        type="password"
        label="Пароль"
        error={!!errors.password?.message}
        helperText={errors.password?.message}
      />
      <LoadingButton
        loading={isSubmittingForm}
        type="submit"
        variant="contained"
      >
        Авторизоваться
      </LoadingButton>
    </Box>
  );
};

export default LoginForm;
