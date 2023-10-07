import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = 'light' | 'dark';

const themeSlise = createSlice({
  name: "@@theme",
  initialState: "light" as Theme,
  reducers: {
    setTheme: (_, action: PayloadAction<Theme>) => action.payload,
  },
});

export const { setTheme } = themeSlise.actions;
export const themeReducer = themeSlise.reducer;
