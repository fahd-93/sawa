import axios from 'axios';
import {
    AUTH_SIGN_UP,
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT,
    AUTH_ERROR,
} from './actionTypes';


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


export const getAllCamp = () => dispatch => {
    axios
        .get('http://localhost:4000/api/campaign')
        .then( res => {
            dispatch({
                type: "GET_ALL_CAMP",
                 payload: res.data
                })
        })
// updateInput is to update the redux Campaign Store with the the new inputs
export const addInputs = inputs => dispatch => {
    console.log('inputs', inputs);
    dispatch({
        type: "ADD_INPUTS",
        payload: inputs
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

// export const editCampaign = () => dispatch => {
//     let id = '5c9cbf4b07dce90a6de3b9ea';
//     axios
//         .get(`http://localhost:4000/api/campaign/${id}`)
//         .then( res => {
//             console.log(res.data);
//         })
// };



// Sign up. save the Token & handle Error Message
export const signUp = data => {
    return async dispatch => {
        try {
            console.log('[ActionCreator] signUp called!')
            const res = await axios.post('http://localhost:4000/api/users/signup', data)
            console.log('[ActionCreator] signUp dispatched an action!')
            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.token
            })
            localStorage.setItem('JWT_TOKEN', res.data.token);
            axios.defaults.headers.common['Authorization'] = res.data.token;
            dispatch({ type: 'SAVE_LOGGED_IN_USER', payload: res.data.user })

        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email is already in use'
            })
            //console.log('err', err);

        }

    }
}



// SignIn. save the Token & handle Error Message
export const signIn = data => {
    return async dispatch => {
        try {
            console.log('[ActionCreator] SignIn called!')
            const res = await axios
                .post('http://localhost:4000/api/users/signin', data)
            console.log('[ActionCreator] signIn dispatched an action!')

            dispatch({
                type: AUTH_SIGN_IN,
                payload: res.data.token
            });
            console.log(res.data);

            localStorage.setItem('JWT_TOKEN', res.data.token);
            // dispatch({ type: 'SAVE_LOGGED_IN_USER', payload: res.data.user })
            axios.defaults.headers.common['Authorization'] = res.data.token;
            dispatch({ type: 'SAVE_LOGGED_IN_USER', payload: res.data.user })

        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email and password combination isn\'t valid'
            })

            //console.log('err', err);

        }

    };
}




// Facebook
export const oauthFacebook = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:4000/api/oauth/facebook', {
            access_token: data
        });

        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        });

        localStorage.setItem('JWT_TOKEN', res.data.token);
        axios.defaults.headers.common['Authorization'] = res.data.token;
    };
}







// SignOut

export const signOut = () => {
    return dispatch => {
        localStorage.clear('jwt_token');
        console.log(localStorage);
        axios.defaults.headers.common['Authorization'] = '';
        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    };

}



