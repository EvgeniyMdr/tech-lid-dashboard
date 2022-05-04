import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthActions } from "@/store/auth/authActions";

interface IRequireAuth {
  children: JSX.Element;
}

const RequireAuth: FC<IRequireAuth> = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAuthActions();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
