import { ADD_CATEGORY, ADD_INPUTS, ADD_LOCATION, GET_ALL_CAMP, GET_CAMP_ID } from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_CAMP: {
            console.log('action get all campaign', action.payload);
            return {
                ...state,
                campaign: action.payload
            }
        }
        case "ADD_NEW_CAMP": {
           let campaign= state.campaign;
           campaign.push(action.payload);
           console.log('redux',campaign);
            return {
                ...state,
                campaign: campaign
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
            return {
                ...state,
                campaign_location: action.payload
            }
        }

        case GET_CAMP_ID: {
            return {
                ...state,
                campaign_id: action.payload
            }
        }

        default:
            return state;

    }
}