import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isAuthing: false,
    isAuth: false,
    isSignIn: false,
    user: {},
    error: false,
    errorMessage: '',
    isSaving: false,
    saved: false
}

export const signInRequest = ( state =INITIAL_STATE, action) => {
    return {
        ...state,
        isSignIn: true,
        error: false,
        errorMessage: ''
    }
}
export const signInSuccess = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isSignIn: false,
        isAuth: true,
        user: action.user
    }
}
export const signInFailure = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isSignIn: false,
        error: true,
        errorMessage: action.error
    }
}
export const authRequest = ( state =INITIAL_STATE, action) => {
    return {
        ...state,
        isSignIn: true,
        error: false,
        errorMessage: ''
    }
}
export const authSuccess = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isSignIn: false,
        isAuth: true,
        user: action.user
    }
}
export const authFailure = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isSignIn: false,
        //error: true,
        isAuth: false,
        //errorMessage: action.error
    }
}


export const destroyAuthSuccess = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isSignIn: false,
        isAuth: false,
        user: {}
    }
}


export const createProfileRequest = ( state =INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        error: false,
        saved: false,
        errorMessage: ''
    }
}
export const createProfileSuccess = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isSaving: false,
        saved: true
    }
}
export const createProfileFailure = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isSaving: false,
        error: true,
        errorMessage: action.error
    }
}
export const createProfileReset = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        //error: false,
    }
}
export const HANDLERS = {
    [Types.SIGNIN_REQUEST]: signInRequest,
    [Types.SIGNIN_SUCCESS]: signInSuccess,
    [Types.SIGNIN_FAILURE]: signInFailure,

    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure,

    [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess,

    [Types.CREATE_PROFILE_REQUEST]: createProfileRequest,
    [Types.CREATE_PROFILE_SUCCESS]: createProfileSuccess,
    [Types.CREATE_PROFILE_FAILURE]: createProfileFailure,
    [Types.CREATE_PROFILE_RESET]: createProfileReset


}

export default createReducer(INITIAL_STATE, HANDLERS)