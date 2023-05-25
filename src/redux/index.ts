import { createStore } from "redux";

interface AddFilter {
  type: string;
  filter: string;
}

function addFilter(filter: string) {
  return {
    type: "ADD_FILTER",
    filter: filter,
  };
}

function removeFilters() {
  return {
    type: "REMOVE_FILTERS",
  };
}

export { addFilter, removeFilters };

function reducer(state: string[] = [], action: AddFilter) {
  switch (action.type) {
    case "ADD_FILTER": {
      const index = state.findIndex((filter) => filter === action.filter);
      if (index !== -1) {
        return state.filter((filter) => filter !== action.filter);
      }
      return [...state, action.filter];
    }
    case "REMOVE_FILTERS": {
      return [];
    }
    default:
      return state;
  }
}

export type RootState = ReturnType<typeof reducer>;

const store = createStore(reducer);

export default store;
