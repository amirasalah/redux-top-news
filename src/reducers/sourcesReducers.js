import {
  GET_ALL_SOURCES_STARTED,
  GET_ALL_SOURCES_DONE,
  GET_ALL_SOURCES_FAILED,
  SELECT_SOURCE_CATEGORY,
  SELECT_SOURCE_LANGUAGE
} from "../types/types";

export const sourcesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_SOURCES_STARTED:
      return Object.assign({}, state, {
        sourcesLoading: true
      });
    case GET_ALL_SOURCES_DONE:
      return Object.assign({}, state, {
        availableSources: action.sources,
        sourcesLoading: false
      });
    case GET_ALL_SOURCES_FAILED:
      return Object.assign({}, state, {
        sourcesError: true
      });
    case SELECT_SOURCE_CATEGORY:
      return Object.assign({}, state, {
        sourcesCategory: action.category
      });
    case SELECT_SOURCE_LANGUAGE:
      return Object.assign({}, state, {
        sourcesLanguage: action.language
      });
    default:
      return state;
  }
};
