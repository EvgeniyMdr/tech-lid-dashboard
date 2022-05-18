import { FormEmployee } from "@/components/FormEmployee";
import { IEmployer } from "@/models/IEmployer";
import { useEmployeesActions } from "@/store/employees/employeesActions";
import { $employer } from "@/store/employer";
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const employer = useStore($employer);
  const { updateEmployer } = useEmployeesActions();

  const updateEmployeeSubmitHandler = (user: IEmployer) => {
    updateEmployer(id || "", user);
  };

  useEffect(() => {
    if (!employer) {
      navigate("/");
    }
  }, [employer, navigate]);

  return (
    <FormEmployee
      onSubmit={updateEmployeeSubmitHandler}
      defaultValues={employer}
    />
  );
};

export { EditEmployerPage };
