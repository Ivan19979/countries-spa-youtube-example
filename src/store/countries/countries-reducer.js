import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-actions";

const initialState = {
  status: "idle", // loading | received | rejected
  error: null,
  list: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        error: null,
        status: "loading",
      };
    }
    case SET_COUNTRIES: {
      return {
        ...state,
        status: "received",
        list: payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: "rejected",
        err: payload,
      };
    }
    default:
      return state;
  }
};
