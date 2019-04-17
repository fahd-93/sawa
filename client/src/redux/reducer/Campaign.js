import { ADD_CATEGORY, ADD_INPUTS, ADD_LOCATION, SAVE_CAMPAIGN, GET_ALL_CAMP } from "../actions/actionTypes";

const initialState = {
    campaign:[],
    category:'',
     location: {
         latitude: '',
         longitude: '',
         city: '',
         postcode: '',
         country: '',
         countryCode: '',
         type: '',
     },
     image: ''
};

export default (state = initialState, action) => {
    console.log('state from redux', state);
    
    switch (action.type) {

        case GET_ALL_CAMP: {
            return {
                campaign: action.payload
            }
        }
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
            //console.log('Action',action.payload);
            return {
                ...state,
                location: {
                    latitude: action.payload.latlng.lat,
                    longitude: action.payload.latlng.lng,
                    city: action.payload.city,
                    postcode: action.payload.postalCode,
                    country: action.payload.country,
                    countryCode: action.payload.countryCode,
                    type: action.payload.type,
                }
            }
        }

        case SAVE_CAMPAIGN: {
            //console.log('state', state);
            return {
                ...state,
                title: action.payload.campaign.title,
                description: action.payload.campaign.description,
                num_of_volunteers: action.payload.campaign.num_of_volunteers,
                type_of_volunteers: action.payload.campaign.type_of_volunteers,
                start_date: action.payload.start_date,
                end_date: action.payload.end_date,

            }
        }
        default:
            return state;

    }
}