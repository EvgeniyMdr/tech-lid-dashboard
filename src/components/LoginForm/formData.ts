import * as Yup from "yup";
const validationErrorTextRequired = "Обязательное поле для ввода";
const emailValidationErrorText = "Некоректный email";

interface IInitialValues {
  login: string;
  password: string;
}
export const initialValues: IInitialValues = {
  login: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  login: Yup.string()
    .email(emailValidationErrorText)
    .required(validationErrorTextRequired),
  password: Yup.string().required(validationErrorTextRequired),
});
