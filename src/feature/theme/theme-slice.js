import { createSlice } from "@reduxjs/toolkit";

const themeSlise = createSlice({
  name: "@@theme",
  initialState: "light",
  reducers: {
    setTheme: (_, action) => action.payload,
  },
});

export const { setTheme } = themeSlise.actions;
export const themeReducer = themeSlise.reducer;
