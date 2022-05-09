import { db } from "@/api";
import { IShortEmployeeData } from "@/models/user";
import { collection, getDocs } from "firebase/firestore";
import { atom, selector } from "recoil";
import axios from "axios";

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

export const employeesSelector = selector({
  key: "selector/EmployeesList",
  get: async () => {
    try {
      const resp = await axios({
        method: "get",
        url: "http://localhost:3000/users",
      });
      console.log("resp", resp);
      return resp.data;
    } catch {
      throw new Error("Ошибка получения данных");
    }
  },
});

