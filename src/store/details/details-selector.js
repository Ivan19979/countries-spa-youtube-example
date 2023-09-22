export const selectCurrentCountry = (state, { name }) =>
  state.details.currentCountry;

export const selectDetails = (state) => state.details;

export const selectNeighbors = (state) => state.details.neighbors;
