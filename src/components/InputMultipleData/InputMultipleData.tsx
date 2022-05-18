import React, { useState, FC, useEffect } from "react";
import { Chip, IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styles from "./InputMultipleData.module.scss";
import { generateHash } from "@/utils/hashGenerate";

export interface IData {
  id: string;
  text: string;
}

interface IInputMultipleData {
  onChange: (data: [] | null) => void;
  label: string;
  name: string;
  defaultValues?: string;
  children?: JSX.Element;
}

const InputMultipleData: FC<IInputMultipleData> = ({
  label,
  name,
  onChange,
  children,
  defaultValues,
}) => {
  const [inputVal, setInputVal] = useState<string>("");
  const [data, setData] = useState<IData[] | null>(null);

  const addNewItemToData = () => {
    if (inputVal.trim() !== "") {
      const newData: IData = {
        id: generateHash(),
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

  const deleteElementClickHandler = (id: string) => {
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

  useEffect(() => {
    if (defaultValues) {
      setData(JSON.parse(defaultValues));
    }
  }, [defaultValues]);

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
