import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FC } from "react";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "./formData";
import styles from "./RegistrationForm.module.scss";

interface IRegistrationForm {
  onSubmit: (val: any) => void;
  isSubmittingForm: boolean;
}

const RegistrationForm: FC<IRegistrationForm> = ({
  isSubmittingForm,
  onSubmit,
}) => {
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
      <TextField
        name="passwordConfirm"
        value={values.passwordConfirm}
        type="password"
        label="Подтверждение пароля"
        error={!!errors.passwordConfirm}
        helperText={errors.passwordConfirm}
        onChange={handleChange("passwordConfirm")}
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

export default RegistrationForm;
