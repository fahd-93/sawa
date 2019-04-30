import { ADD_CATEGORY, ADD_NEW_CAMP, ADD_LOCATION, GET_ALL_CAMP, GET_CAMP_ID } from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_CAMP: {
            return {
                ...state,
                campaign: action.payload
            }
        }
        case ADD_NEW_CAMP: {
           let campaign= state.campaign;
           campaign.push(action.payload);
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