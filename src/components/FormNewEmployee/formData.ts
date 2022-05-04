import * as Yup from "yup";
const validationErrorTextRequired = "Обязательное поле для ввода";

export interface IInitialValues {
  name: string;
  positionAtWork: string;
  avatar: string;
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(validationErrorTextRequired),
  positionAtWork: Yup.string().required(validationErrorTextRequired),
  avatar: Yup.string(),
});
