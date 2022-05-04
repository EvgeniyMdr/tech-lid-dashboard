import React from "react";
import styles from "./Header.module.scss";
import { Logo, LogoText } from "@/assets/icons";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthActions } from "@/store/auth/authActions";

const Header = () => {
  const { signOut } = useAuthActions();
  return (
    <header className={styles.header}>
      <div>
        <Logo />
        <LogoText />
      </div>
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
