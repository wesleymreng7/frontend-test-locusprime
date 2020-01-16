import axios from 'axios'
import { Creators } from '../actionCreators'
import { put } from 'redux-saga/effects'
export function* getGitUser(action) {
    try {
        const user = yield axios.get('https://api.github.com/users/' + action.username)
        if (user && user.data) {
            const userToSave = {
                login: user.data.login,
                name: user.data.name,
                public_repos: user.data.public_repos,
                avatar_url: user.data.avatar_url,
                data: action.data
            }
            const newUser = yield axios.post('http://localhost:3001/github_users/', userToSave, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (newUser && !newUser.data.error) {
                yield put(Creators.getGitUserSuccess(userToSave));
            } else {
                yield put(Creators.getGitUserFailure('uknown error'));
            }
        } else {
            yield put(Creators.getGitUserFailure('uknown error'));
        }
    } catch (e) {
        yield put(Creators.getGitUserFailure(e.message));
    }

}
export function* getUsers(action) {
    const users = yield axios.get('http://localhost:3001/github_users');
    if (users.data) {
        yield put(Creators.getUsersSuccess(users.data));
    } else {
        yield put(Creators.getUsersFailure(users.data.message));
    }
}
export function* getUser(action) {
    try {
        const users = yield axios.get('http://localhost:3001/github_users', {
            params: {
                login: action.username
            }
        });
        if (users.data && users.data.length > 0) {
            yield put(Creators.getUserSuccess(users.data[0]));
        } else {
            yield put(Creators.getUserFailure(users.data.message));
        }
    } catch (e) {
        yield put(Creators.getUserFailure(e.message));
    }

}

export function* getRepos(action) {
    try {
        const users = yield axios.get('https://api.github.com/users/'+action.username+'/repos');
        if (users.data && users.data.length > 0) {
            yield put(Creators.getReposSuccess(users.data));
        } else {
            yield put(Creators.getReposFailure(users.data.message));
        }
    } catch (e) {
        yield put(Creators.getReposFailure(e.message));
    }

}
