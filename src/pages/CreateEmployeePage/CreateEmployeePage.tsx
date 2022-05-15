import { FormNewEmployee } from "@/components/FormNewEmployee";
import { IShortEmployeeData } from "@/models/user";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const CreateEmployeePage = () => {
  const snack = useSnackbar();
  const navigate = useNavigate();
  const createEmployeeSubmitHandler = (user: IShortEmployeeData) => {
    console.log("USER", user);
    // setNewEmployee(user);
    snack.enqueueSnackbar(`Пользователь ${user.name}`, {
      variant: "success",
    });
    navigate("/");
  };
  return (
    <div>
      <FormNewEmployee onSubmit={createEmployeeSubmitHandler} />
    </div>
  );
};;

export default CreateEmployeePage;
