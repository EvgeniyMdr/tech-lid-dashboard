import { FormEmployee } from "@/components/FormEmployee";
import { IEmployer } from "@/models/IEmployer";
import { useEmployeesActions } from "@/store/employees/employeesActions";

const CreateEmployeePage = () => {
  const { createEmployee } = useEmployeesActions();
  const createEmployeeSubmitHandler = (user: IEmployer) => {
    createEmployee(user);
  };
  return (
    <div>
      <FormEmployee type="create" onSubmit={createEmployeeSubmitHandler} />
    </div>
  );
};

export default CreateEmployeePage;
