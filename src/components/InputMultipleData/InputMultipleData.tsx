import React, { useState, FC } from "react";
import { Chip, IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styles from "./InputMultipleData.module.scss";

export interface IData {
  id: number;
  text: string;
}

interface IInputMultipleData {
  onChange: (skills: [] | null) => void;
  label: string;
  name: string;
  children?: JSX.Element;
}

const InputMultipleData: FC<IInputMultipleData> = ({
  label,
  name,
  onChange,
  children,
}) => {
  const [inputVal, setInputVal] = useState<string>("");
  const [data, setData] = useState<IData[] | null>(null);

  // const submitHandler = ({ text }: { text: string }) => {
  //   const newSkill: IData = {
  //     id: new Date().getTime(),
  //     text,
  //   };
  //   setSkills((prev) => {
  //     if (prev !== null) {
  //       const newArr = [...prev, newSkill];
  //       onChange(JSON.stringify(newArr));
  //       return newArr;
  //     } else {
  //       const newArr = [newSkill];
  //       onChange(JSON.stringify(newArr));
  //       return newArr;
  //     }
  //   });
  // };
  const addNewItemToData = () => {
    if (inputVal.trim() !== "") {
      const newData: IData = {
        id: new Date().getTime(),
        text: inputVal,
      };
      setData((prev) => {
        if (prev === null) {
          //@ts-ignore
          onChange([newData]);
          return [newData];
        } else {
          // @ts-ignore
          onChange([...prev, newData]);
          return [...prev, newData];
        }
      });
      setInputVal("");
    }
  };

  const deleteElementClickHandler = (id: number) => {
    setData((prev) => {
      const filteredArr = prev?.filter((el) => el.id !== id);
      if (filteredArr?.length) {
        // @ts-ignore
        onChange(filteredArr);
        return filteredArr;
      } else {
        onChange(null);
        return null;
      }
    });
  };

  const inputChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <TextField
          name={name}
          value={inputVal}
          onChange={inputChangeHandler}
          label={label}
          type="text"
          className={styles.field}
        />
        <IconButton onClick={addNewItemToData} className={styles.deleteBtn}>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
      {children}
      {data && (
        <div className={styles.dataWrapper}>
          {data.map((el, index) => (
            <Chip
              label={el.text}
              onDelete={() => deleteElementClickHandler(el.id)}
              key={el.id + index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InputMultipleData;
