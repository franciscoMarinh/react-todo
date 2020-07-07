import { combineReducers } from 'redux'
import rootReducer from './main'
import loadingReducer from './loading'

export default combineReducers({ main: rootReducer, app: loadingReducer })
