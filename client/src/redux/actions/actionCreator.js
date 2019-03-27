import axios from 'axios';

export const getCategory = category => dispatch => {
    console.log("action", category);
    dispatch({
        type: "GET_CATEGORY",
        payload: category
    })
};

export const saveCampaign = (category, data) => dispatch => {
    console.log("action", data);
    axios
        .post(`http://localhost:4000/api/campaign/${category}`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        .then( response => {
            console.log(response);
            dispatch({
                type: "SAVE_CAMPAIGN",
                payload: data
            })
        })
        .catch( error => {
            console.log(error);
        })
};

