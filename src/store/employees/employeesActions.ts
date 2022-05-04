import { db } from "@/api";
import { IShortEmployeeData } from "@/models/user";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { employeesAtom } from "./employees";

export const useEmployeesActions = () => {
  const setEmployeesAtom = useSetRecoilState(employeesAtom);
  const createEmployee = async (user: IShortEmployeeData) => {
    const id = `${new Date().getTime()}`;
    try {
      setEmployeesAtom((prev) => ({
        ...prev,
        isFetching: true,
      }));
      await setDoc(doc(db, "users", id), user);
      getEmployeesList();
      console.log("Материал создан", { variant: "success" });
    } catch (e) {
      console.log("ошибка при создании материала", { variant: "error" });
    }
  };

  const getEmployeesList = async () => {
    try {
      const resp = await getDocs(collection(db, "users"));
      const userList: IShortEmployeeData[] = [];
      resp.forEach((el) => {
        userList.push(el.data() as IShortEmployeeData);
      });
      if (userList.length) {
        setEmployeesAtom((prev) => ({
          ...prev,
          data: userList,
        }));
      }
    } catch (error) {
      throw error;
    }
  };

  return {
    createEmployee,
    getEmployeesList,
  };
};
