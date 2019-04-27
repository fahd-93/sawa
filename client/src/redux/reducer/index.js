import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import campaignReducer from "./Campaign";
import authReducer from './auth';
import userReducer from './userReducer';
import users from './Users';

export default combineReducers({
    campaign: campaignReducer,
    form: formReducer,
    auth: authReducer,
    userReducer: userReducer,
    users: users
});