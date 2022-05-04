import { IShortEmployeeData } from "@/models/user";
import { useEmployeesActions } from "@/store/employees/employeesActions";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FormNewEmployee } from "./components/FormNewEmployee";
import styles from "./ListOfEmployees.module.scss";

const ListOfEmployees = () => {
  const { createEmployee, getEmployeesList } = useEmployeesActions();
  const [isFormCreateOpen, setIsFormCreateOpen] = useState<boolean>(false);

  const openCreateFrom = () => {
    setIsFormCreateOpen(true);
  };

  const closeCreateForm = () => {
    setIsFormCreateOpen(false);
  };

  const createEmployeeSubmitHandler = (user: IShortEmployeeData) => {
    createEmployee(user);
    closeCreateForm();
  };

  useEffect(() => {
    getEmployeesList();
  }, [getEmployeesList]);

  return (
    <div className={styles.header}>
      <h2>Список сотрудников</h2>
      <Button variant="outlined" onClick={openCreateFrom}>
        Создать профиль сотрудника
      </Button>
      <FormNewEmployee
        isOpen={isFormCreateOpen}
        handleClose={closeCreateForm}
        onSubmit={createEmployeeSubmitHandler}
      />
    </div>
  );
};

export default ListOfEmployees;
