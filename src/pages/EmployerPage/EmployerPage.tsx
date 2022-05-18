import { $employer, getEmployerFx } from "@/store/employer";
import { deleteEmployerFx } from "@/store/employer/employer";
import { Button } from "@mui/material";
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./EmployerPage.module.scss";

const EmployerPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const employer = useStore($employer);

  useEffect(() => {
    getEmployerFx(id || "");
  }, [id]);

  const deleteHandler = () => {
    deleteEmployerFx(id || "");
    navigate("/");
  };

  return (
    <div className={styles.pageWrapper}>
      {employer && (
        <div className={styles.employerWrapper}>
          <img
            className={styles.avatar}
            src={
              employer.avatar
                ? employer.avatar
                : "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
            }
            alt={employer.name}
          />
          <h2>{employer.name}</h2>
          <p>{employer.positionAtWork}</p>
          <p>{employer.currentProject}</p>
          <ul>
            {employer?.projects?.map((el) => (
              <li key={el.id}>{el.text}</li>
            ))}
          </ul>
          <ul>
            {employer?.skills?.map((el) => (
              <li key={el.id}>{el.text}</li>
            ))}
          </ul>
        </div>
      )}
      <div className={styles.controllers}>
        <Link
          className={styles.link}
          replace={true}
          to={`/edit-employer/${id}`}
        >
          <Button variant="contained" color="secondary">
            Редактировать
          </Button>
        </Link>
        <Button onClick={deleteHandler} variant="contained" color="error">
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default EmployerPage;
