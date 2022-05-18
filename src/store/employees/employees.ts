// import { IEmployer } from "@/models/employer";
import { IEmployer } from "@/models/IEmployer";
import axios from "axios";
import { createEffect, createStore } from "effector";

export const fetchEmployeesFx = createEffect(async () => {
  const { data } = await axios.get("http://localhost:3000/employees");
  return data;
});

export const $employeesStore = createStore<IEmployer[] | null>(null).on(
  fetchEmployeesFx.doneData,
  (_, employees) => employees
);
