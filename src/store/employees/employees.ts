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

export const employeesSelector = selector({
  key: "selector/EmployeesList",
  get: async () => {
    const resp = await getDocs(collection(db, "users"));
    console.log(resp);
    const userList: IShortEmployeeData[] = [];
    // resp.forEach((el) => {
    //   userList.push(JSON.parse(el.data()));
    // });
    return userList;
  },
});
