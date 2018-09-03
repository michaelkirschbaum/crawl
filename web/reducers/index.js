import { combineReducers } from 'redux'
import appReducer from './app'
import uploadReducer from './upload'

export default combineReducers({
  appReducer,
  uploadReducer
})
