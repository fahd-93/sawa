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
            reject (new Error('Permission Denied'));
        });
    });
};

export const addCategory = category => dispatch => {
    dispatch({
        type: "ADD_CATEGORY",
        payload: category
    })
};

export const addLocation = location => dispatch => {
    dispatch({
        type: "ADD_LOCATION",
        payload: location
    })
};


export const saveCampaign = (inputs, formData) => dispatch => {
    axios({
        method: "post",
        url: 'http://localhost:4000/api/users/5cb5b36127c5b16de2aef22d/campaign',
        data: formData,
        headers: {
            "content-type": `multipart/form-data; boundary=${formData._boundary}`
        }
    })
        .then(() => {
            dispatch({
                type: "ADD_INPUTS",
                payload: inputs
            });
        })
        .catch( error => {
            console.log(error)
        })
};


