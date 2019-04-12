import { combineReducers } from "redux";
import campaignReducer from "./Campaign";
// import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import userReducer from './userReducer';

export default combineReducers({
    campaign: campaignReducer,
    // form: formReducer,
    auth: authReducer,
    userReducer: userReducer




});