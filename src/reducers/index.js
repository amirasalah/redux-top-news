import { combineReducers } from "redux";
import { sources } from "./sourcesReducers";

const rootReducer = combineReducers({
    sources
})
export default rootReducer;