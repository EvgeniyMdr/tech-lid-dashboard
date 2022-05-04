import { Button } from "@mui/material";
import { useState } from "react";
import { FormNewEmployee } from "./components/FormNewEmployee";
import styles from "./ListOfEmployees.module.scss";

const ListOfEmployees = () => {
  const [isFormCreateOpen, setIsFormCreateOpen] = useState<boolean>(false);

  const openCreateFrom = () => {
    setIsFormCreateOpen(true);
  };

  const closeCreateForm = () => {
    setIsFormCreateOpen(false);
  };

  return (
    <div className={styles.header}>
      <h2>Список сотрудников</h2>
      <Button variant="outlined" onClick={openCreateFrom}>
        Создать профиль сотрудника
      </Button>
      <FormNewEmployee
        isOpen={isFormCreateOpen}
        handleClose={closeCreateForm}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default ListOfEmployees;
