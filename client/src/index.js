import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import ProfilePage from './components/ProfilePage';
// import Router from './components/Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import reducers from './redux/reducer/index';
import authGuard from './components/HOCs/authGuard';

// import store from './redux/store/index';

import * as serviceWorker from './serviceWorker';



const jwtToken = localStorage.getItem('JWT_TOKEN');
axios.defaults.headers.common['Authorization'] = jwtToken;


ReactDOM.render(
    <Provider store={createStore(reducers, {
        auth: {
            token: jwtToken,
            isAuthenticated: jwtToken ? true : false
        }

    }, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signup" component={SignUpForm} />
                <Route exact path="/signin" component={SignInForm} />
                <Route exact path="/profilepage" component={authGuard(ProfilePage)} />


            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
