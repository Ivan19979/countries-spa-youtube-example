import { Theme, setTheme } from "./theme-slice";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectTheme } from "./theme-selectors";

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
