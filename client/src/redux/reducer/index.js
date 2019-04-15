import { combineReducers } from "redux";
import campaignReducer from "./Campaign";
import userReducer from "./User";

export default combineReducers({ campaignReducer, userReducer });