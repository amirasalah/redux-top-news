import { combineReducers } from "redux";
import { sourcesReducer } from "./sourcesReducers";

const rootReducer = combineReducers({
  sourcesData: sourcesReducer
});
export default rootReducer;
