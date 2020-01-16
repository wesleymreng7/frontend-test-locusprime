import { combineReducers } from 'redux'
import auth from './auth'
import gitUsers from './gitUsers'

const rootReducer = combineReducers({ 
    auth,
    gitUsers
})

export default rootReducer