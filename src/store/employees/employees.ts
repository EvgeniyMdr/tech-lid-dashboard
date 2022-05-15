// import { IEmployer } from "@/models/employer";
import { IEmployer } from "@/models/employer";
import axios from "axios";
import { createEffect, createEvent, createStore } from "effector";

export const fetchEmployeesFx = createEffect(async () => {
  const { data } = await axios.get("http://localhost:3000/employees");
  console.log("resp", data);
  return data;
});

export const $employeesStore = createStore<IEmployer[] | null>(null).on(
  fetchEmployeesFx.doneData,
  (_, employees) => employees
);
