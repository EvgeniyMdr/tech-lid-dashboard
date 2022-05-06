import React, { useState, FC } from "react";
import { IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./InputMultipleData.module.scss";
import { IInitialValues, validationSchema } from "./formData";

interface IData {
  id: number;
  text: string;
}

interface IInputMultipleData {
  onChange: (skills: string | null) => void;
  label: string;
  children?: JSX.Element;
}

const InputMultipleData: FC<IInputMultipleData> = ({
  label,
  onChange,
  children,
}) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInitialValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const [skills, setSkills] = useState<IData[] | null>(null);

  const submitHandler = ({ text }: { text: string }) => {
    const newSkill: IData = {
      id: new Date().getTime(),
      text,
    };
    setSkills((prev) => {
      if (prev !== null) {
        onChange(JSON.stringify([...prev, newSkill]));
        return [...prev, newSkill];
      } else {
        onChange(JSON.stringify([newSkill]));
        return [newSkill];
      }
    });
    reset();
  };

  const deleteElementClickHandler = (id: number) => {
    setSkills((prev) => {
      const filteredArr = prev?.filter((el) => el.id !== id);
      if (filteredArr?.length) {
        onChange(JSON.stringify(filteredArr));
        return filteredArr;
      } else {
        onChange(null);
        return null;
      }
    });
  };

  const keyUpHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit(submitHandler)();
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className={styles.form}>
        <TextField
          {...register("text")}
          label={label}
          type="text"
          error={!!errors.text?.message}
          helperText={errors.text?.message}
          className={styles.field}
          onKeyPress={keyUpHandler}
        />
        <IconButton
          onClick={handleSubmit(submitHandler)}
          className={styles.deleteBtn}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
      {children}
      {skills && (
        <div className={styles.dataWrapper}>
          {skills.map((el, index) => (
            <div className={styles.dataItem} key={el.id + index}>
              {el.text}
              <IconButton onClick={() => deleteElementClickHandler(el.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputMultipleData;
