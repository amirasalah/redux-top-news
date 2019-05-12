import {
  GET_ALL_SOURCES_STARTED,
  GET_ALL_SOURCES_DONE,
  GET_ALL_SOURCES_FAILED
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

export const fetchPosts = () => {
  return function(dispatch) {
    dispatch(getSourcesStarted());
    return axiosInstance
      .get("/v2/sources", {
        params: {
          apiKey: API_KEY
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
