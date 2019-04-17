import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
// import HomePage from './components/HomePage';
// import SignUpForm from './components/SignUpForm';
// import SignInForm from './components/SignInForm';
// import ProfilePage from './components/ProfilePage';
import Router from './components/Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import reducers from './redux/reducer/index';
// import authGuard from './components/HOCs/authGuard';

// import store from './redux/store/index';



const jwtToken = localStorage.getItem('JWT_TOKEN');
axios.defaults.headers.common['Authorization'] = jwtToken;


ReactDOM.render(
    <Provider store={createStore(reducers, {
        auth: {
            token: jwtToken,
            isAuthenticated: jwtToken ? true : false
        }

    }, applyMiddleware(reduxThunk))}>
        <Router />

    </Provider>,
    document.getElementById('root')
);
