import { GET_ALL_USERS } from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_USERS: {
            console.log('reducer users',action.payload);
            console.log('reducers',state);
            
            return {
                
                ...state,
                user: action.payload       
        }
    }
    
    default:
            return state;
    }
}