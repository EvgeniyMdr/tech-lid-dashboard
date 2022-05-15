import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./EmployerCard.module.scss";

interface IEmployerCard {
  id: string;
  avatar: string;
  name: string;
  positionAtWork: string;
}

const EmployerCard: FC<IEmployerCard> = ({
  id,
  name,
  avatar,
  positionAtWork,
}) => {
  return (
    <Link className={styles.link} to={`employer/${id}`}>
      <div className={styles.card}>
        <img
          className={styles.avatar}
          src={
            avatar !== ""
              ? avatar
              : "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
          }
          alt=""
        />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.positionAtWork}>{positionAtWork}</p>
      </div>
    </Link>
  );
};

export default EmployerCard;
