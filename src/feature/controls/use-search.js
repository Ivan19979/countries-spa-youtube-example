import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "./controls-slice";

export const useSearch = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearch);

  const handleSearch = (e) => dispatch(setSearch(e.target.value));

  return [value, handleSearch];
};
