import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import { FC } from "react";
import { validationSchema, initialValues } from "./formData";
import styles from "./LoginForm.module.scss";

interface ILoginForm {
  onSubmit: (val: any) => void;
  isSubmittingForm: boolean;
}

const LoginForm: FC<ILoginForm> = ({ onSubmit, isSubmittingForm }) => {
  const { values, errors, isValid, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box className={styles.form} component={"form"} onSubmit={handleSubmit}>
      <TextField
        name="login"
        value={values.login}
        type="email"
        label="Email"
        error={!!errors.login}
        helperText={errors.login}
        onChange={handleChange("login")}
      />
      <TextField
        name="password"
        value={values.password}
        type="password"
        label="Пароль"
        error={!!errors.password}
        helperText={errors.password}
        onChange={handleChange("password")}
      />
      <LoadingButton
        loading={isSubmittingForm}
        disabled={!isValid}
        type="submit"
        variant="contained"
      >
        Авторизоваться
      </LoadingButton>
    </Box>
  );
};

export default LoginForm;
