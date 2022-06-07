import { createEffect, createEvent, createStore } from "effector";
import axios from "axios";
import { IEmployer } from "@/models/IEmployer";

interface ISearchStore {
  search: string;
  searchType: "name" | "positionAtWork";
}

export const searchChangeEvent = createEvent<string>();
export const searchTypeChangeEvent = createEvent<"name" | "positionAtWork">();
export const resetSearchedUserEvent = createEvent();

export const getSearchedUsersFx = createEffect(async (params: ISearchStore) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/employees?${params.searchType}_like=${params.search}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const $searchedUsers = createStore<null | IEmployer[]>(null)
  .on(getSearchedUsersFx.done, (state, payload) => {
    return payload.result;
  })
  .on(resetSearchedUserEvent, (state) => null);

export const $search = createStore<ISearchStore>({
  search: "",
  searchType: "name",
})
  .on(searchChangeEvent, (state, payload) => ({
    ...state,
    search: payload,
  }))
  .on(searchTypeChangeEvent, (state, payload) => ({
    ...state,
    searchType: payload,
  }));
