import { ADD_CATEGORY, ADD_INPUTS, ADD_LOCATION } from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_CATEGORY: {
            return {
                ...state,
                category: action.payload
            }
        }

        case ADD_INPUTS: {
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                num_of_volunteers: action.payload.num_of_volunteers,
                type_of_volunteers: action.payload.type_of_volunteers,
                start_date: action.payload.start_date,
                end_date: action.payload.end_date,
            }
        }

        case ADD_LOCATION: {
            return {
                ...state,
                campaign_location: action.payload
            }
        }

        default:
            return state;

    }
}