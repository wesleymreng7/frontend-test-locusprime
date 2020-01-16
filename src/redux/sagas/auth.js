import axios from 'axios'
import { takeLatest, all, put } from 'redux-saga/effects'
import { Types, Creators } from '../actionCreators'

export function* login(action) {
    try {
        const login = yield axios.get('http://localhost:3001/system_users', {
            params: {
                email: action.email,
                password: action.password
            }
        })
        if (login.data && login.data.length > 0) {
            localStorage.setItem('user', JSON.stringify(login.data[0]));
            yield put(Creators.signinSuccess(login.data[0]));
        } else {
            yield put(Creators.signinFailure(login.data.message));
        }
    } catch (e) {
        console.log(e.message);
    }

}

export function* auth() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        yield put(Creators.authSuccess(user));
    } else {
        yield put(Creators.authFailure());
    }
}
export function* destroyAuth() {
    localStorage.removeItem('user');
    yield put(Creators.destroyAuthSuccess());
}

export function* createProfile(action) {
    const userToSave = {
        ...action.user
    }
    const user = yield axios.post('http://localhost:3001/system_users/', userToSave, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (user && user.data && user.data.error) {
        yield put(Creators.createProfileFailure(user.data.message))
    } else {
        yield put(Creators.createProfileSuccess())
    }
}