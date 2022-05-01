import { Link } from "react-router-dom";
import { RegistrationForm } from "../../components/RegistrationForm";
import styles from "./Registration.module.scss";

const Registration = () => {
  return (
    <div className={styles.page}>
      <RegistrationForm
        isSubmittingForm={false}
        onSubmit={(val) => {
          console.log("val", val);
        }}
      />
      <div className={styles.loginWrapper}>
        Есть аккаунт? - <Link to="/login">Авторизоваться</Link>
      </div>
    </div>
  );
};

export default Registration;
