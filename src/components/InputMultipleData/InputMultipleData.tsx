import { useState, FC } from "react";
import { IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./InputMultipleData.module.scss";
import { IInitialValues, validationSchema } from "./formData";
import { useEffect } from "react";

interface ISkill {
  id: string;
  text: string;
}

interface IInputMultipleData {
  onChange: (skills: ISkill[] | null) => void;
}

const InputMultipleData: FC<IInputMultipleData> = ({ onChange }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInitialValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const [skills, setSkills] = useState<ISkill[] | null>(null);

  const submitHandler = ({ text }: { text: string }) => {
    const newSkill: ISkill = {
      id: new Date().toDateString(),
      text,
    };
    setSkills((prev) => {
      if (prev !== null) {
        return [...prev, newSkill];
      } else {
        return [newSkill];
      }
    });
    reset();
  };

  const deleteElementClickHandler = (id: string) => {
    setSkills((prev) => prev?.filter((el) => el.id !== id) || null);
  };

  useEffect(() => {
    onChange(skills);
  }, [skills]);

  return (
    <div>
      <div className={styles.form}>
        <TextField
          {...register("text")}
          label="Скилл"
          type="text"
          error={!!errors.text?.message}
          helperText={errors.text?.message}
          className={styles.field}
        />
        <IconButton
          onClick={handleSubmit(submitHandler)}
          className={styles.deleteBtn}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
      <div className={styles.dataWrapper}>
        {skills &&
          skills.map((el, index) => (
            <div className={styles.dataItem} key={el.id + index}>
              {el.text}
              <IconButton onClick={() => deleteElementClickHandler(el.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InputMultipleData;
