import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import * as api from "config";
import { themeReducer } from "feature/theme/theme-slice";
import { controlsReducer } from "feature/controls/controls-slice";
import { countryReducer } from "feature/countries/countries-slice";
import { detailsReducer } from "feature/details/details-slice";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;