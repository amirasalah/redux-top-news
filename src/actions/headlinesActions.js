import {
  GET_ALL_HEADLINES_STARTED,
  GET_ALL_HEADLINES_DONE,
  GET_ALL_HEADLINES_FAILED,
  SEARCH_ALL_HEADLINES_STARTED,
  SEARCH_ALL_HEADLINES_FAILED,
  SEARCH_ALL_HEADLINES_DONE
} from "../types/types";

import { axiosInstance, API_KEY } from "../API/news-api";

export const getHeadlinesStarted = () => ({
  type: GET_ALL_HEADLINES_STARTED
});
export const getHeadlinesDone = headlines => ({
  type: GET_ALL_HEADLINES_DONE,
  headlines
});
export const getHeadlinesFailed = () => ({
  type: GET_ALL_HEADLINES_FAILED
});
export const searchHeadlinesStarted = query => ({
  type: SEARCH_ALL_HEADLINES_STARTED,
  query
});
export const searchHeadlinesDone = headlines => ({
  type: SEARCH_ALL_HEADLINES_DONE,
  headlines
});
export const searchHeadlinesFailed = () => ({
  type: SEARCH_ALL_HEADLINES_FAILED
});

export const fetchHeadlines = () => async dispatch => {
  dispatch(getHeadlinesStarted());
  try {
    const el = await axiosInstance
      .get("/v2/top-headlines", {
        params: {
          apiKey: API_KEY,
        }
      });
    dispatch(getHeadlinesDone(el.data));
  }
  catch (error) {
    dispatch(getHeadlinesFailed());
  }
};