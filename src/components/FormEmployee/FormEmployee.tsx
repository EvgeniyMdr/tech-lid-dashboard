import { DialogTitle, Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema, IInitialValues } from "./formData";
import styles from "./FormEmployee.module.scss";
import { InputMultipleData } from "@/components/InputMultipleData";
import { IData } from "../InputMultipleData/InputMultipleData";
import { IEmployer } from "@/models/IEmployer";
interface IFormNewEmployee {
  onSubmit: (user: IEmployer) => void;
  defaultValues?: IEmployer | null;
}

type IFields = "name" | "skills" | "positionAtWork" | "avatar" | "projects";

const FormEmployee: FC<IFormNewEmployee> = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IInitialValues>({
    defaultValues: {
      name: defaultValues?.name,
      positionAtWork: defaultValues?.positionAtWork,
      avatar: defaultValues?.avatar,
      currentProject: defaultValues?.currentProject,
      skills: defaultValues?.skills.toString(),
      projects: defaultValues?.projects.toString(),
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const submitHandler = (user: any) => {
    reset();
    onSubmit(user);
  };

  const setValueHandler = (fieldName: IFields, value: IData[] | null) => {
    //@ts-ignore
    setValue(fieldName, value || [], { shouldValidate: true });
  };

  return (
    <Box
      className={styles.form}
      component={"form"}
      onSubmit={handleSubmit(submitHandler)}
    >
      <DialogTitle>Форма создания сотрудника</DialogTitle>
      <TextField
        {...register("name")}
        type="text"
        label="ФИО"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("positionAtWork")}
        type="text"
        label="Должность"
        error={!!errors.positionAtWork?.message}
        helperText={errors.positionAtWork?.message}
      />
      <TextField
        {...register("avatar")}
        type="text"
        label="Ссылка на аватар"
        error={!!errors.avatar?.message}
        helperText={errors.avatar?.message}
      />
      <TextField
        {...register("currentProject")}
        type="text"
        label="Текущий проект"
        error={!!errors.currentProject?.message}
        helperText={errors.currentProject?.message}
      />
      <InputMultipleData
        name="multiSkills"
        label="Технология и уровень"
        onChange={(data) => {
          setValueHandler("skills", data);
        }}
      >
        <>
          <input {...register("skills")} type={"hidden"} />
          {!!errors.skills?.message && (
            <p className={styles.errorText}>{errors.skills?.message}</p>
          )}
        </>
      </InputMultipleData>
      <InputMultipleData
        name="multiProj"
        label="Предыдущие проекты"
        onChange={(data) => {
          setValueHandler("projects", data);
        }}
      >
        <>
          <input {...register("projects")} type={"hidden"} />
          {!!errors.projects?.message && (
            <p className={styles.errorText}>{errors.projects?.message}</p>
          )}
        </>
      </InputMultipleData>
      <LoadingButton loading={false} type="submit" variant="contained">
        Создать
      </LoadingButton>
    </Box>
  );
};

export default FormEmployee;
