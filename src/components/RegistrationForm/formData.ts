import * as Yup from "yup";
const validationErrorTextRequired = "Обязательное поле для ввода";
const emailValidationErrorText = "Некоректный email";
const passwordValidationErrorText = "Пароли должны совпадать";

export interface IInitialValues {
  login: string;
  password: string;
  passwordConfirm: string;
}

export const validationSchema = Yup.object({
  login: Yup.string()
    .email(emailValidationErrorText)
    .required(validationErrorTextRequired),
  password: Yup.string().required(validationErrorTextRequired),
  passwordConfirm: Yup.string()
    .required(validationErrorTextRequired)
    .oneOf([Yup.ref("password"), null], passwordValidationErrorText),
}).required();
