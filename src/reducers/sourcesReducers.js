import {
  GET_ALL_SOURCES_STARTED,
  GET_ALL_SOURCES_DONE,
  GET_ALL_SOURCES_FAILED,
  SELECT_SOURCE_CATEGORY
} from "../types/types";

export const sourcesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_SOURCES_STARTED:
      return Object.assign({}, state, {
        loading: true
      });
    case GET_ALL_SOURCES_DONE:
      return Object.assign({}, state, {
        availableSources: action.sources,
        loading: false
      });
    case GET_ALL_SOURCES_FAILED:
      return Object.assign({}, state, {
        error: true
      });
    case SELECT_SOURCE_CATEGORY:
      return Object.assign({}, state, {
        category: action.category
      });
    default:
      return state;
  }
};
