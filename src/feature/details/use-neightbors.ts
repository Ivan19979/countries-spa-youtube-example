import { useSelector } from "react-redux";
import { loadNeighborsByBorder } from "./details-slice";
import { useEffect } from "react";
import { useAppDispatch } from "store";
import { selectNeighbors } from "./details-selectors";

export const useNeightbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbors = useSelector(selectNeighbors);
  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [dispatch, borders]);
  return neighbors;
};
