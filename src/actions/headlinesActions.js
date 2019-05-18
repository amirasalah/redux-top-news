import {
  GET_ALL_HEADLINES_STARTED,
  GET_ALL_HEADLINES_DONE,
  GET_ALL_HEADLINES_FAILED,
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

export const fetchHeadlines = (id) => async (dispatch) => {
  dispatch(getHeadlinesStarted());
  try {
    const el = await axiosInstance
      .get("/v2/top-headlines", {
        params: {
          apiKey: API_KEY,
          sources: id
        }
      });
    dispatch(getHeadlinesDone(el.data));
  }
  catch (error) {
    dispatch(getHeadlinesFailed());
  }
};