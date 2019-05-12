import {
  GET_ALL_SOURCES_STARTED,
  GET_ALL_SOURCES_DONE,
  GET_ALL_SOURCES_FAILED,
  SELECT_SOURCE_CATEGORY
} from "../types/types";
import { axiosInstance, API_KEY } from "../API/news-api";

export const getSourcesStarted = () => {
  return {
    type: GET_ALL_SOURCES_STARTED
  };
};
export const getSourcesDone = sources => {
  return {
    type: GET_ALL_SOURCES_DONE,
    sources
  };
};
export const getSourcesFailed = () => {
  return {
    type: GET_ALL_SOURCES_FAILED
  };
};
export const selectSourceCategory = (category) => {
  return {
    type: SELECT_SOURCE_CATEGORY,
    category
  };
};
export const fetchPosts = (category) => {
  return function(dispatch) {
    dispatch(getSourcesStarted());
    dispatch(selectSourceCategory(category));
    return axiosInstance
      .get("/v2/sources", {
        params: {
          apiKey: API_KEY,
          category: category
        }
      })
      .then(el => {
        dispatch(getSourcesDone(el.data));
      })
      .catch(error => {
        dispatch(getSourcesFailed());
      });
  };
};
