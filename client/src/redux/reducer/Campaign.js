import { GET_CATEGORY } from "../actions/actionTypes";

const initialState = {
    category: ''
};

export default function (state = initialState, action) {
    console.log('Reducer', action.type);
    switch (action.type) {
        case GET_CATEGORY: {
            console.log('Case: GET_Category');
            return {
                ...state,
                category: action.payload
            }
        }
        default:
            return state;

    }
}