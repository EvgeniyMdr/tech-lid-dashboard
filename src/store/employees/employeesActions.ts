import { db } from "@/api";
import { IShortEmployeeData } from "@/models/user";
import { doc, setDoc } from "firebase/firestore";

export const useEmployeesActions = () => {
  const createEmployee = async (user: IShortEmployeeData) => {
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
