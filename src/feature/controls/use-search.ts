import { useSelector } from "react-redux";
import { setSearch } from "./controls-slice";
import { useAppDispatch } from "store";
import { selectSearch } from "./controls-selectors";
import { ChangeEventHandler } from "react";

type onSearch = ChangeEventHandler<HTMLInputElement>; 

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const value = useSelector(selectSearch);

  const handleSearch: onSearch = (e) => dispatch(setSearch(e.target.value));

  return [value, handleSearch];
};
