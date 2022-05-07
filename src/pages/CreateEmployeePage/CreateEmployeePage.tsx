import { FormNewEmployee } from "@/components/FormNewEmployee";
import { IShortEmployeeData } from "@/models/user";
import { useEmployeesActions } from "@/store/employees/employeesActions";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const CreateEmployeePage = () => {
  const snack = useSnackbar();
  const navigate = useNavigate();
  const { createEmployee } = useEmployeesActions();
  const createEmployeeSubmitHandler = (user: IShortEmployeeData) => {
    console.log("USER", user);
    snack.enqueueSnackbar(`Пользователь ${user.name}`, {
      variant: "success",
    });
    createEmployee(user);
    navigate("/");
  };
  return (
    <div>
      <FormNewEmployee onSubmit={createEmployeeSubmitHandler} />
    </div>
  );
};;

export default CreateEmployeePage;
