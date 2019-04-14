import { AUTH_SIGN_UP, AUTH_ERROR } from '../actions/actionTypes';

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMessage: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AUTH_SIGN_UP:
            console.log('[ActionReducer] got an AuthSignUp action!')
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_ERROR:
            console.log('[ActionReducer] got an AuthError action!')
            return { ...state, errorMessage: action.payload }
        default:
            return state

    }

}
