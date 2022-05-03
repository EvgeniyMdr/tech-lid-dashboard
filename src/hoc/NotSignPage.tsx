import { FC } from "react";
import { Navigate, useLocation, Location } from "react-router-dom";
import { useAuthActions } from "../store/auth/authActions";
import { IStateLocation } from "../types";

interface IProps {
  children: JSX.Element;
}

const NotSignPage: FC<IProps> = ({ children }) => {
  const location: Location = useLocation();

  const fromPage = (location.state as IStateLocation)?.from?.pathname || "/";
  const { isAuth } = useAuthActions();

  if (isAuth) {
    return <Navigate to={fromPage} />;
  }

  return children;
};

export default NotSignPage;
