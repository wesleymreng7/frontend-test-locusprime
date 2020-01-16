import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    user: {},
    data: [],
    repos: [],
    saved: false,
    isSaving: false,
    error: false,
    errorMessage: ''
}

export const getGitUserRequest = ( state =INITIAL_STATE, action) => {
    return {
        ...state,
        error: false,
        isSaving: true,
        saved: false  
    }
}
export const getGitUserSuccess = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        user: action.user,
        error: false,
        isSaving: false,
        saved: true
    }
}
export const getGitUserFailure = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        errorMessage: action.error,
        user: {},
        error: true,
        isSaving: false,
        saved: false
    }
}

export const getUsersRequest = ( state =INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getUsersSuccess = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isLoading: false,
        data: action.data
    }
}
export const getUsersFailure = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const getUserRequest = ( state =INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getUserSuccess = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isLoading: false,
        user: action.user
    }
}
export const getUserFailure = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}
export const getReposRequest = ( state =INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getReposSuccess = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isLoading: false,
        repos: action.data
    }
}
export const getReposFailure = ( state = INITIAL_STATE, action ) => {
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const HANDLERS = {
    [Types.GET_GIT_USER_REQUEST]: getGitUserRequest,
    [Types.GET_GIT_USER_SUCCESS]: getGitUserSuccess,
    [Types.GET_GIT_USER_FAILURE]: getGitUserFailure,

    [Types.GET_USERS_REQUEST]: getUsersRequest,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,


    [Types.GET_USER_REQUEST]: getUserRequest,
    [Types.GET_USER_SUCCESS]: getUserSuccess,
    [Types.GET_USER_FAILURE]: getUserFailure,

    [Types.GET_REPOS_REQUEST]: getReposRequest,
    [Types.GET_REPOS_SUCCESS]: getReposSuccess,
    [Types.GET_REPOS_FAILURE]: getReposFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS)