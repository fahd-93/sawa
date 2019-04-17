
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
    dispatch({
        type: "ADD_CATEGORY",
        payload: category
    })
};


export const getAllCamp = () => dispatch => {    
    axios
        .get('http://localhost:4000/api/campaign')
        .then( res => {
            dispatch({
                type: "GET_ALL_CAMP",
                 payload: res.data
                })
        })
};



export const addLocation = location => dispatch => {
    console.log(location);
    dispatch({
        type: "ADD_LOCATION",
        payload: location
    })
};

// updateInput is to update the redux Campaign Store with the the new inputs
export const saveCampaign = object => dispatch => {
    //console.log('inputs', inputs);
    console.log('FormData from action', object);
   axios({
        method: "post",
        url: 'http://localhost:4000/api/users/5cb6d786e6e28616783e9696/campaign',
        data: object,
        headers: {
          "content-type": `multipart/form-data; boundary=${object._boundary}`
        }
    })
    .then(res => 
        {
         console.log('res from savecampaing', res.data);
         dispatch({
            type: "SAVE_CAMPAIGN",
             payload: res.data
            })
        })
    
};
//saveCampaign is to post, with axios, the campaign in the DB
/*export const saveCampaign = (object, category) => dispatch => {
    console.log('category from axios', object);
    axios
        .post( 'http://localhost:4000/api/users/5cb454bb07f8852dea1e2c7a/campaign', {object})
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
};*/

export const editCampaign = () => dispatch => {
    let id = '5c9cbf4b07dce90a6de3b9ea';
    axios
        .get(`http://localhost:4000/api/campaign/${id}`)
        .then( res => {
            console.log(res.data);
        })
};

