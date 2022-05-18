import * as Yup from "yup";
const validationErrorTextRequired = "Обязательное поле для ввода";
const validationErrorTextRequiredOneElem =
  "Обязательное добавить минимум 1 элемент";

export interface IInitialValues {
  name: string;
  positionAtWork: string;
  avatar: string;
  currentProject: string;
  skills: string;
  projects: string;
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(validationErrorTextRequired),
  positionAtWork: Yup.string().required(validationErrorTextRequired),
  avatar: Yup.string(),
  currentProject: Yup.string(),
  skills: Yup.array().required(validationErrorTextRequiredOneElem),
  projects: Yup.array().required(validationErrorTextRequiredOneElem),
});
