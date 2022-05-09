import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./ListOfEmployees.module.scss";
import { useRecoilValue } from "recoil";
import { employeesSelector } from "@/store/employees/employees";
import { useEffect } from "react";
import axios from "axios";

const ListOfEmployees = () => {
  const navigate = useNavigate();
  const userList = useRecoilValue(employeesSelector);

  console.log("userList", userList);
  const createEmployeeClickHandler = () => {
    navigate("/create-employee");
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/posts",
    }).then((resp) => {
      console.log("resp", resp);
    });
  }, []);

  return (
    <div className={styles.header}>
      <h2>Список сотрудников</h2>
      <Button variant="outlined" onClick={createEmployeeClickHandler}>
        Создать профиль сотрудника
      </Button>
    </div>
  );
};

export default ListOfEmployees;
