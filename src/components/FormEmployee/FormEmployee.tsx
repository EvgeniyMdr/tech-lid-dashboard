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
  type: "update" | "create";
  defaultValues?: IEmployer | null;
}

type IFields = "name" | "skills" | "positionAtWork" | "avatar" | "projects";

const FormEmployee: FC<IFormNewEmployee> = ({
  onSubmit,
  type,
  defaultValues,
}) => {
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
      skills: JSON.stringify(defaultValues?.skills || "") || "",
      projects: JSON.stringify(defaultValues?.projects || "") || "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const submitHandler = (user: any) => {
    reset();
    onSubmit(user);
  };

  const setValueHandler = (fieldName: IFields, value: string | null) => {
    //@ts-ignore
    setValue(fieldName, value || [], { shouldValidate: true });
  };

  return (
    <Box
      className={styles.form}
      component={"form"}
      onSubmit={handleSubmit(submitHandler)}
    >
      {type === "create" && (
        <DialogTitle>Форма создания сотрудника</DialogTitle>
      )}
      {type === "update" && (
        <DialogTitle>Форма редактирования сотрудника</DialogTitle>
      )}
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
        defaultValues={JSON.stringify(defaultValues?.skills)}
        onChange={(data) => {
          setValueHandler("skills", JSON.stringify(data));
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
        defaultValues={JSON.stringify(defaultValues?.projects)}
        onChange={(data) => {
          setValueHandler("projects", JSON.stringify(data));
        }}
      >
        <>
          <input {...register("projects")} type={"hidden"} />
          {!!errors.projects?.message && (
            <p className={styles.errorText}>{errors.projects?.message}</p>
          )}
        </>
      </InputMultipleData>
      {type === "create" && (
        <LoadingButton type="submit" variant="contained">
          Создать
        </LoadingButton>
      )}
      {type === "update" && (
        <LoadingButton type="submit" variant="contained">
          Обновить
        </LoadingButton>
      )}
    </Box>
  );
};

export default FormEmployee;
