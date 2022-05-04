import { db } from "@/api";
import { ICreateEmployee } from "@/models/user";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export const useEmployeesActions = () => {
  const createEmployee = async (user: ICreateEmployee) => {
    const id = `${new Date().getTime()}`;
    try {
      await setDoc(doc(db, "users", id), user);
      console.log("Материал создан", { variant: "success" });
    } catch (e) {
      console.log("ошибка при создании материала", { variant: "error" });
    }
  };

  return {
    createEmployee,
  };
};
