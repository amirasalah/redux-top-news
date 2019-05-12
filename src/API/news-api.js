import Axios from "axios";

const BASE_URL = "https://newsapi.org/";
export const API_KEY = "5294c4e4a8cf4f8ca93b1e6ef7fa916e";

export const axiosInstance = Axios.create({
  baseURL: BASE_URL
});
