import { SET_AUTHENTICATION } from '../components/app/appActions'

const initialState = {
  isAuthenticated: false
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return Object.assign({}, state, {
        isAuthenticated: action.status
      })
    default:
      return state
  }
}

export default appReducer
