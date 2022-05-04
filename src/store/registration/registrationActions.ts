import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { IUserRegistration } from "@/models/user";
import { authAtom } from "@/store/auth/authState";
import { registrationAtom } from "./registrationState";

export const useRegistrationAction = () => {
  const setUser = useSetRecoilState(authAtom);
  const setRegistrationsState = useSetRecoilState(registrationAtom);
  const auth = getAuth();

  const createUser = (user: IUserRegistration) => {
    createUserWithEmailAndPassword(auth, user.login, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setRegistrationsState((prev) => ({
          ...prev,
          isSubmittingForm: false,
        }));
      })
      .catch(() => {
        setRegistrationsState((prev) => ({
          ...prev,
          errors: ["При создании пользователся произошла ошибка"],
        }));
      });
  };

  return {
    createUser,
  };
};
