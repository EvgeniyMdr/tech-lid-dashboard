import axios from "axios";
import { IEmployer } from "@/models/IEmployer";
import { generateHash } from "@/utils/hashGenerate";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export const useEmployeesActions = () => {
  const snack = useSnackbar();
  const navigate = useNavigate();

  const createEmployee = async (user: IEmployer) => {
    const id = generateHash();
    try {
      await axios.post("http://localhost:3000/employees", {
        id,
        avatar: user.avatar,
        currentProject: user.currentProject,
        name: user.name,
        positionAtWork: user.positionAtWork,
        projects: user.projects,
        skills: user.skills,
      });
      snack.enqueueSnackbar(`Профиль пользователя ${user.name} создан`, {
        variant: "success",
      });
      navigate("/");
    } catch (e) {
      snack.enqueueSnackbar(`Ошибка создания пользователя`, {
        variant: "error",
      });
    }
  };

  const updateEmployer = async (userId: string, user: IEmployer) => {
    try {
      await axios.patch(`http://localhost:3000/employees/${userId}`, {
        ...user,
      });
      snack.enqueueSnackbar(`Пользователь ${user.name} обновлен`, {
        variant: "success",
      });
      navigate(`/employer/${userId}`);
    } catch (e) {
      snack.enqueueSnackbar(`Ошибка редактирования пользователя`, {
        variant: "error",
      });
    }
  };
  return {
    createEmployee,
    updateEmployer,
  };
};
