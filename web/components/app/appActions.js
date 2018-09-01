export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'

export function setAuthentication(status) {
  return {
    type: SET_AUTHENTICATION,
    status
  }
}
