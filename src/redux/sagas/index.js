import { takeLatest, all, put } from 'redux-saga/effects'
import { Types, Creators } from '../actionCreators' 
import { getGitUser, getUsers, getUser, getRepos } from './gitUsers'
import { auth, login, destroyAuth, createProfile } from './auth'

export default function* rootSaga() {
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
        takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile),
        takeLatest(Types.GET_GIT_USER_REQUEST, getGitUser),
        takeLatest(Types.GET_USERS_REQUEST, getUsers),
        takeLatest(Types.GET_USER_REQUEST, getUser),
        takeLatest(Types.GET_REPOS_REQUEST, getRepos),
        put(Creators.authRequest())
    ])
}