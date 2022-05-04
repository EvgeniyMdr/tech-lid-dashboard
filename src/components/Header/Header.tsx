import React from "react";
import styles from "./Header.module.scss";
import { Logo, LogoText } from "@/assets/icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <LogoText />
    </header>
  );
};

export default Header;
