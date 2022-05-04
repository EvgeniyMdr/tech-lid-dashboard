import { db } from "@/api";
import { IShortEmployeeData } from "@/models/user";
import { collection, getDocs } from "firebase/firestore";
import { atom, selector } from "recoil";

interface IEmployeesAtom {
  isSubmittingForm: boolean;
  isErrorForm: boolean;
  isFetching: boolean;
  data: null | IShortEmployeeData[];
}

export const employeesAtom = atom<IEmployeesAtom>({
  key: "atom/Employees",
  default: {
    isSubmittingForm: false,
    isErrorForm: false,
    isFetching: false,
    data: null,
  },
});
