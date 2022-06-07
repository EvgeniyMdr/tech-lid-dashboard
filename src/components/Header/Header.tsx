import React from "react";
import styles from "./Header.module.scss";
import { Logo, LogoText } from "@/assets/icons";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthActions } from "@/store/auth/authActions";
import { useNavigate } from "react-router-dom";
import { Search } from "../Search";

const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useAuthActions();

  const logoClickHandler = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper} onClick={logoClickHandler}>
        <Logo />
        <LogoText />
      </div>
      <Search />
      <IconButton
        className={styles.logoutBtn}
        aria-label="logout"
        onClick={signOut}
      >
        <LogoutIcon />
      </IconButton>
    </header>
  );
};

export default Header;
