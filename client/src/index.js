import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass/styles.scss';
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
import * as jwt_decode from "jwt-decode";


const jwtToken = localStorage.getItem('JWT_TOKEN');
let userId = null;

try {
    let x = jwt_decode(jwtToken);
    userId = x.sub;

    axios.defaults.headers.common['Authorization'] = jwtToken;
}
catch (error) {
    console.log(error);
}

ReactDOM.render(
<Provider store={createStore(reducers, {
        auth: {
            userId: userId,
            token: jwtToken,
            isAuthenticated: jwtToken ? true : false
}
}, applyMiddleware(reduxThunk))}>
<Router />
</Provider>,
document.getElementById('root')
);
