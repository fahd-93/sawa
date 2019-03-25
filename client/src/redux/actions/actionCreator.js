import axios from 'axios';

export const getCategory = category => dispatch => {
    axios
        .post(`http://localhost:4000/api/campaign/${category}`, category)
        .then( response => {
            dispatch({
                type: "GET_CATEGORY",
                payload: category
            })
        })
        .catch( error => {
            console.log(error);
        })
};