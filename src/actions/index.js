import {
  GET_ALL_SOURCES_STARTED,
  GET_ALL_SOURCES_DONE,
  GET_ALL_SOURCES_FAILED,
  SELECT_SOURCE_CATEGORY,
  SELECT_SOURCE_LANGUAGE
} from "../types/types";
import { axiosInstance, API_KEY } from "../API/news-api";

export const getSourcesStarted = () => ({
    type: GET_ALL_SOURCES_STARTED
});
export const getSourcesDone = sources => ({
  type: GET_ALL_SOURCES_DONE,
  sources
});
export const getSourcesFailed = () => ({
    type: GET_ALL_SOURCES_FAILED
});
export const selectSourceCategory = category => ({
  type: SELECT_SOURCE_CATEGORY,
  category
});
export const selectSourceLanguage = language => ({
  type: SELECT_SOURCE_LANGUAGE,
  language
});
export const fetchPosts = (category = 'business' , language = 'en') => async dispatch => {
  dispatch(getSourcesStarted());
  dispatch(selectSourceCategory(category));
  dispatch(selectSourceLanguage(language));
  try {
    const el = await axiosInstance
      .get("/v2/sources", {
        params: {
          apiKey: API_KEY,
          category: category,
          language: language
        }
      });
    dispatch(getSourcesDone(el.data));
  }
  catch (error) {
    dispatch(getSourcesFailed());
  }
};
