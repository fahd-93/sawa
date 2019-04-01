
import axios from 'axios';

// getCategory is to retrieve the chosen component form.
export const getCategory = category => dispatch => {
    dispatch({
        type: "GET_CATEGORY",
        payload: category
    })
};

// saveCampaign is to post, with axios, the campaign in the DB
export const saveCampaign = (object, data) => dispatch => {
    axios
        .post(`http://localhost:4000/api/campaign/${object.category}`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        .then( res => {
            console.log(res.data);
            dispatch({
                type: "SAVE_CAMPAIGN",
                payload: object
            })
        })
        .catch( error => {
            console.log(error);
        })
};

export const editCampaign = () => dispatch => {
    let id = '5c9cbf4b07dce90a6de3b9ea';
    axios
        .get(`http://localhost:4000/api/campaign/${id}`)
        .then( res => {
            console.log(res.data);
        })
};

