import { GET_LOCATION} from "../actions/actionTypes";

const initialState = {
    latitude: 0,
    longitude: 0
};

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_LOCATION: {
            return {
                ...state,
                latitude : action.latitude,
                longitude : action.longitude
            }
        }
        default:
            return state;
    }

}