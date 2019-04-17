
import axios from 'axios';

export const getLocation = () => dispatch => {

    const geolocation = navigator.geolocation;

    new Promise((resolve, reject) => {
        if (!geolocation) {
            reject(new Error('Not Supported'));
        }
        geolocation.getCurrentPosition((position) => {
            resolve(dispatch({
                type: "GET_LOCATION",
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }));
        }, () => {
            reject (new Error('Permission denied'));
        });
    });
};

// getCategory is to retrieve the chosen component form.
export const addCategory = category => dispatch => {
    console.log('Action', category);
    dispatch({
        type: "ADD_CATEGORY",
        payload: category
    })
};

export const addLocation = location => dispatch => {
    console.log(location);
    dispatch({
        type: "ADD_LOCATION",
        payload: location
    })
};

// saveCampaign is to post, with axios, the campaign in the DBs
export const saveCampaign = (inputs, formData) => dispatch => {
    console.log('inputs', inputs);
    console.log('FormData', formData);
    axios
        .post(`http://localhost:4000/api/users/5cb3a919354b1927d5a97775/campaign`, inputs)
        .then(res => {
            console.log('axios', res.data);
            dispatch({
                type: "ADD_INPUTS",
                payload: inputs
            })
        })
        .catch( error => {
            console.log(error)
        })

};


// export const editCampaign = () => dispatch => {
//     let id = '5c9cbf4b07dce90a6de3b9ea';
//     axios
//         .get(`http://localhost:4000/api/campaign/${id}`)
//         .then( res => {
//             console.log(res.data);
//         })
// };

