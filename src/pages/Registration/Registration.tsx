import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";
import { useAuthActions } from "../../store/auth/authActions";
import styles from "./Registration.module.scss";

const Registration = () => {
  const { login } = useAuthActions();
  return (
    <div className={styles.page}>
      <LoginForm isSubmittingForm={false} onSubmit={login} />
      <div className={styles.loginWrapper}>
        Есть аккаунт? - <Link to="/login">Авторизоваться</Link>
      </div>
    </div>
  );
};

export default Registration;
