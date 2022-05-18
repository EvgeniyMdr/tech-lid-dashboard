import { IEmployer } from "@/models/IEmployer";
import axios from "axios";
import { createEffect, createStore } from "effector";

export const getEmployerFx = createEffect(async (id: string) => {
  const { data } = await axios.get(`http://localhost:3000/employees?id=${id}`);
  return data[0];
});

export const deleteEmployerFx = createEffect(async (id: string) => {
  try {
    const resp = await axios.delete(`http://localhost:3000/employees/${id}`);
    console.log("resp");
  } catch (err) {
    console.error(err);
  }
});

export const $employer = createStore<IEmployer | null>(null)
  .on(getEmployerFx.doneData, (_, employer) => employer)
  .on(deleteEmployerFx.done, () => null);
