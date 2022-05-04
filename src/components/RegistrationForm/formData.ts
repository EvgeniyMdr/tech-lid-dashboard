import * as Yup from "yup";
const validationErrorTextRequired = "Обязательное поле для ввода";
const emailValidationErrorText = "Некоректный email";
const passwordValidationErrorText = "Пароли должны совпадать";
const minLengthError = (num: number) =>
  `Минимальное количестов символов ${num}`;
export interface IInitialValues {
  login: string;
  password: string;
  passwordConfirm: string;
}

export const validationSchema = Yup.object({
  login: Yup.string()
    .email(emailValidationErrorText)
    .required(validationErrorTextRequired),
  password: Yup.string()
    .min(6, minLengthError(6))
    .required(validationErrorTextRequired),
  passwordConfirm: Yup.string()
    .required(validationErrorTextRequired)
    .oneOf([Yup.ref("password"), null], passwordValidationErrorText),
}).required();
