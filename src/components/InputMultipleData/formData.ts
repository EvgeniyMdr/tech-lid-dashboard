import * as Yup from "yup";
const validationErrorTextRequired = "Обязательное поле для ввода";

export interface IInitialValues {
  text: string;
}

export const validationSchema = Yup.object().shape({
  text: Yup.string().required(validationErrorTextRequired),
});
