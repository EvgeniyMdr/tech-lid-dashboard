import {
  $search,
  $searchedUsers,
  getSearchedUsersFx,
  resetSearchedUserEvent,
  searchChangeEvent,
  searchTypeChangeEvent,
} from "@/store/search/search";
import { MenuItem, Select, TextField } from "@mui/material";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.scss";

const Search = () => {
  const { search, searchType } = useStore($search);
  const searchedUsers = useStore($searchedUsers);

  useEffect(() => {
    if (search !== "") {
      getSearchedUsersFx({ search, searchType });
    } else {
      resetSearchedUserEvent();
    }
  }, [search, searchType]);
  return (
    <div className={styles.search}>
      <TextField
        value={search}
        onChange={({ target: { value } }) => {
          searchChangeEvent(value);
        }}
        variant="outlined"
      />
      <Select
        defaultValue={searchType}
        value={searchType}
        onChange={(e) => {
          searchTypeChangeEvent(e.target.value as "name" | "positionAtWork");
        }}
      >
        <MenuItem value={"name"}>Имя</MenuItem>
        <MenuItem value={"positionAtWork"}>Должность</MenuItem>
      </Select>
      {searchedUsers && (
        <div className={styles.usersWrapper}>
          {searchedUsers.map((el) => (
            <Link className={styles.link} to={`/employer/${el.id}`}>
              <div>{el.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
