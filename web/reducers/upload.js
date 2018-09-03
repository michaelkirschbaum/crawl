import { SET_ERROR, SET_LOADING } from '../components/upload/uploadActions'

const initialState = {
  isLoading: false,
  errorStatus: null
}

function uploadReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return Object.assign({}, state, {
        isLoading: action.status
      })
    case SET_ERROR:
      return Object.assign({}, state, {
        errorStatus: action.status
      })
    default:
      return state
  }
}

export default uploadReducer
