import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import campaignReducer from "./Campaign";
import authReducer from './auth';
import userReducer from './userReducer';

export default combineReducers({
    campaign: campaignReducer,
    form: formReducer,
    auth: authReducer,
    userReducer: userReducer
});