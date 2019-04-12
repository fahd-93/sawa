import { SAVE_LOGGED_IN_USER } from "../actions/actionTypes";

const initialState = {
    loggedInUser: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LOGGED_IN_USER: {

            return {
                ...state,
                loggedInUser: action.payload
            }
        }

        default:
            return state;

    }
}