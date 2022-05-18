import { FormNewEmployee } from "@/components/FormNewEmployee";
import { IEmployer } from "@/models/IEmployer";
import { useEmployeesActions } from "@/store/employees/employeesActions";

const CreateEmployeePage = () => {
  const { createEmployee } = useEmployeesActions();
  const createEmployeeSubmitHandler = (user: IEmployer) => {
    createEmployee(user);
  };
  return (
    <div>
      <FormNewEmployee onSubmit={createEmployeeSubmitHandler} />
    </div>
  );
};;

export default CreateEmployeePage;
