import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { RegistrationForm } from "../../components/RegistrationForm";
import { registrationAtom } from "../../store/registration/registrationState";
import styles from "./Registration.module.scss";
import { useRegistrationAction } from "../../store/registration/registrationActions";

const Registration = () => {
  const { createUser } = useRegistrationAction();
  const [registrationState, setRegistrationsState] =
    useRecoilState(registrationAtom);

  return (
    <div className={styles.page}>
      <RegistrationForm
        isSubmittingForm={registrationState.isSubmittingForm}
        onSubmit={(val) => {
          setRegistrationsState({
            ...registrationState,
            isSubmittingForm: true,
          });
          console.log("asd");
          createUser(val);
        }}
      />
      <div className={styles.loginWrapper}>
        Есть аккаунт? - <Link to="/login">Авторизоваться</Link>
      </div>
    </div>
  );
};

export default Registration;
