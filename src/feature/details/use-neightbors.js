import { useDispatch, useSelector } from "react-redux";
import { loadNeighborsByBorder, selectNeighbors } from "./details-slice";
import { useEffect } from "react";

export const useNeightbors = (borders = []) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);
  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [dispatch, borders]);
  return neighbors;
};
