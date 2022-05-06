import * as Yup from "yup";
const validationErrorTextRequired = "Обязательное поле для ввода";
const minLengthError = (num: number) =>
  `Минимальное количестов символов ${num}`;

export interface IInitialValues {
  text: string;
}

export const validationSchema = Yup.object().shape({
  text: Yup.string().min(2, minLengthError(2)),
});
