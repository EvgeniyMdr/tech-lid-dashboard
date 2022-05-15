import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./ListOfEmployees.module.scss";
import { useEffect } from "react";
import { $employeesStore, fetchEmployeesFx } from "@/store/employees/employees";
import { useStore } from "effector-react";
import { EmployerCard } from "@/components/EmployerCard";

const ListOfEmployees = () => {
  const employees = useStore($employeesStore);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeesFx();
  }, []);

  const createEmployeeClickHandler = () => {
    navigate("/create-employee");
  };
    console.log(employees ? employees[0]?.avatar : null);
  return (
    <div>
      <div className={styles.header}>
        <h2>Список сотрудников</h2>
        <Button variant="outlined" onClick={createEmployeeClickHandler}>
          Создать профиль сотрудника
        </Button>
      </div>
      {employees && (
        <div className={styles.listOfEmployees}>
          {employees.map(({ id, name, avatar, positionAtWork }) => (
            <EmployerCard
              key={id}
              id={id}
              name={name}
              avatar={avatar}
              positionAtWork={positionAtWork}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListOfEmployees;
