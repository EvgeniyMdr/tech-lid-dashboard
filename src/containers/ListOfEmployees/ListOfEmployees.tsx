import { useNavigate } from "react-router-dom";
import { useEmployeesActions } from "@/store/employees/employeesActions";
import { Button } from "@mui/material";
import { useEffect } from "react";
import styles from "./ListOfEmployees.module.scss";

const ListOfEmployees = () => {
  const navigate = useNavigate();
  const { getEmployeesList } = useEmployeesActions();

  useEffect(() => {
    getEmployeesList();
  }, [getEmployeesList]);

  const createEmployeeClickHandler = () => {
    navigate("/create-employee");
  };

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
