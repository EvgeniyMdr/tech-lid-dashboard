import { atom } from "recoil";

export const authAtom = atom({
  key: "atom/authState",
  default: JSON.parse(localStorage.getItem("user") as string),
});
