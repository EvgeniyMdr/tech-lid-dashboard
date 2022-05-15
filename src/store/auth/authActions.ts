import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRecoilState } from "recoil";
import { IUserLogin } from "@/models/user";
import { authAtom } from "./authState";

export const useAuthActions = () => {
  const [user, setUser] = useRecoilState(authAtom);
  const auth = getAuth();
  const signIn = (userData: IUserLogin, cb = () => {}) => {
    signInWithEmailAndPassword(auth, userData.login, userData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(userCredential.user);
        cb();
      })
      .catch((FirebaseError) => {});
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const checkAuth = (): boolean => {
    if (user?.uid !== null && user?.email) {
      return true;
    }
    return false;
  };

  return {
    isAuth: checkAuth(),
    signIn,
    signOut,
  };
};
