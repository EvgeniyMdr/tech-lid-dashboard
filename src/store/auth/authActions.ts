import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRecoilState } from "recoil";
import { IUserLogin } from "../../models/user";
import { authAtom } from "./authState";

export const useAuthActions = () => {
  const [user, setUser] = useRecoilState(authAtom);
  const auth = getAuth();
  const login = (userData: IUserLogin) => {
    signInWithEmailAndPassword(auth, userData.login, userData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(userCredential.user);
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", error);
        console.log("errorMessage", errorMessage);
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    isAuth: user !== null,
    login,
    logout,
  };
};
