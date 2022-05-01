import * as Yup from "yup";
const validationErrorTextRequired = "Обязательное поле для ввода";
const emailValidationErrorText = "Некоректный email";
const passwordValidationErrorText = "Пароли должны совпадать";

interface IInitialValues {
  login: string;
  password: string;
  passwordConfirm: string;
}
export const initialValues: IInitialValues = {
  login: "",
  password: "",
  passwordConfirm: "",
};

export const validationSchema = Yup.object().shape({
  login: Yup.string()
    .email(emailValidationErrorText)
    .required(validationErrorTextRequired),
  password: Yup.string().required(validationErrorTextRequired),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    passwordValidationErrorText
  ),
});
