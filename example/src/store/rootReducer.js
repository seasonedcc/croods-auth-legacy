import { combineReducers } from 'redux'
import { createReducer } from 'croods-auth'

export default combineReducers({ auth: createReducer() })
