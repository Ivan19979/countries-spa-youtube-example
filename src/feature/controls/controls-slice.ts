import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Region } from "types";

type ControlsSlice = {
  search: string,
  region: Region | '',
}

const initialState: ControlsSlice = {
  search: "",
  region: "",
};

const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<Region | ''>) => {
      state.region = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const controlsReducer = controlsSlice.reducer;

export const { setRegion, setSearch, clearControls } = controlsSlice.actions;


