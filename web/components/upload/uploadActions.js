// actions
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'

// action creators
export function setError(status) {
  return { type: SET_ERROR, status }
}

export function setLoading(status) {
  return ( type: SET_LOADING, status )
}
