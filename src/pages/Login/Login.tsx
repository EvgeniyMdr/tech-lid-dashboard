import { ErrorBoundary } from "react-error-boundary";
import { Link, Location, useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/LoginForm";
import { useAuthActions } from "@/store/auth/authActions";
import { IStateLocation } from "@/types";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const location: Location = useLocation();

  const fromPage = (location.state as IStateLocation)?.from?.pathname || "/";
  const { signIn } = useAuthActions();

  const submitHandler = (userData: any) => {
    signIn(userData, () => navigate(fromPage));
  };
  return (
    <div className={styles.page}>
      <LoginForm isSubmittingForm={false} onSubmit={submitHandler} />
      <div className={styles.registerWrapper}>
        Нет аккаунта? - <Link to="/registration">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default Login;
