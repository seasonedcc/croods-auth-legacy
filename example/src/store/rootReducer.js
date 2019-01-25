import { combineReducers } from 'redux'
import { createReducer } from 'croods-auth'
import { createReducer as croodsCreate } from 'croods'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth: createReducer(),
  form: formReducer,
})
