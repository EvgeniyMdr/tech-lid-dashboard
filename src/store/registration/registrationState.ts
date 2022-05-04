import { atom } from "recoil";

interface IRegistrationState {
  isSubmittingForm: boolean;
  errors: string[] | null;
}

export const registrationAtom = atom<IRegistrationState>({
  key: "atom/registrationState",
  default: {
    isSubmittingForm: false,
    errors: null,
  },
});
