import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index";
import thunk from 'redux-thunk';

/*function promiseMiddleware({dispatch}) {
    function isPromise(val) {
        return val && typeof val.then === 'function';
    }
    return next => action => {
        return isPromise(action.payload)
            ? action.payload.then(
                result => dispatch({...action, payload: result}),
                error => dispatch({...action, payload: error, error: true })
            )
            : next(action);
    };
}*/

export default createStore(

    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
