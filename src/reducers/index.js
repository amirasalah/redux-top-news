import { combineReducers } from "redux";
import { sourcesReducer } from "./sourcesReducers";
import { headlinesReducer } from "./headlinesReducers";

const rootReducer = combineReducers({
  sourcesData: sourcesReducer,
  headlinesData: headlinesReducer
});
export default rootReducer;
