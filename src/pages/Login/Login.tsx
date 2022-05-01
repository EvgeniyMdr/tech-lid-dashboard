import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";
import { useAuthActions } from "../../store/auth/authActions";
import styles from "./Login.module.scss";

const Login = () => {
  const { login } = useAuthActions();
  return (
    <div className={styles.page}>
      <LoginForm isSubmittingForm={false} onSubmit={login} />
      <div className={styles.registerWrapper}>
        Нет аккаунта? - <Link to="/registration">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default Login;
