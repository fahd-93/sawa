import { GET_CATEGORY, SAVE_CAMPAIGN } from "../actions/actionTypes";

const initialState = {
     category: '',
     title: '',
     description: '',
     location: '',
     num_of_volunteers: 0,
     type_of_volunteers: [],
     start_date: '',
     end_date: '',
     image: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY: {
            return {
                ...state,
                category: action.payload
            }
        }
        case SAVE_CAMPAIGN: {
            console.log('Reducer Action', action);
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                location: action.payload.location,
                num_of_volunteers: action.payload.num_of_volunteers,
                type_of_volunteers: action.payload.type_of_volunteers,
                start_date: action.payload.start_date,
                end_date: action.payload.end_date,
                image: action.payload.image.name
            }
        }
        default:
            return state;

    }
}