import { atom } from "recoil";

export const employeesAtom = atom({
  key: "atom/Employees",
  default: {
    isSubmittingForm: false,
    isErrorForm: false,
    isFetching: false,
    data: null,
  },
});
