import axios from 'axios';

export const getCategory = category => dispatch => {
    console.log("action", category);
    axios
        .post(`http://localhost:4000/api/campaign/${category}`, category)
        .then( response => {
            console.log(response.data);
            dispatch({
                type: "GET_CATEGORY",
                payload: category
            })
        })
        .catch( error => {
            console.log(error);
        })
};

export const reviewCampaign = data => dispatch => {

    console.log("action", data);
    dispatch({
        type: "SAVE_CAMPAIGN",
        payload: data
    })

};