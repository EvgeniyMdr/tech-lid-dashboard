import { FormNewEmployee } from "@/components/FormNewEmployee";
import { IShortEmployeeData } from "@/models/user";
import { useEmployeesActions } from "@/store/employees/employeesActions";
import React, { useState } from "react";

const CreateEmployeePage = () => {
  const { createEmployee } = useEmployeesActions();
  const createEmployeeSubmitHandler = (user: IShortEmployeeData) => {
    createEmployee(user);
  };
  return (
    <div>
      <FormNewEmployee onSubmit={createEmployeeSubmitHandler} />
    </div>
  );
};

export default CreateEmployeePage;
