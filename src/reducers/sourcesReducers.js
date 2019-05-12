import {
  GET_ALL_SOURCES_STARTED,
  GET_ALL_SOURCES_DONE,
  GET_ALL_SOURCES_FAILED
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
    default:
      return state;
  }
};
