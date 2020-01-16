import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    signinRequest: ['email', 'password'],
    signinSuccess: ['user'],
    signinFailure: ['error'],

    authRequest: null,
    authSuccess: ['user'],
    authFailure: ['error'],

    destroyAuthRequest: null,
    destroyAuthSuccess: null,
    
    getGitUserRequest: ['username', 'data'],
    getGitUserSuccess: ['user'],
    getGitUserFailure: ['error'],

    getUsersRequest: null,
    getUsersSuccess: ['data'],
    getUsersFailure: null,

    getUserRequest: ['username'],
    getUserSuccess: ['user'],
    getUserFailure: ['error'],

    getReposRequest: ['username'],
    getReposSuccess: ['data'],
    getReposFailure: ['error'],

    createProfileReset: null,
    createProfileRequest: ['user'],
    createProfileSuccess: null,
    createProfileFailure: ['error']

})

export default Creators