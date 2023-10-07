import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "./controls-slice";
import { selectRegion } from "./controls-selectors";
import { Region } from "types";
import { CountryOption } from "./CustomSelect";
import { SingleValue } from "react-select";

type onSelect = (reg: SingleValue<CountryOption>) => void

export const useRegion = (): [Region | '', onSelect] => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if(reg){
      dispatch(setRegion(reg.value));
    } else {
      dispatch(setRegion(''));
    }
  }
  return [region, handleSelect];
};
