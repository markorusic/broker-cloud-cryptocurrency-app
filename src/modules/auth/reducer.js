import { merge } from 'src/shared/utils'
import actionTypes from './actions/actionTypes'

const { AUTH_STARTED, AUTH_FAILED, AUTH_SUCCEED, AUTH_ENDED } = actionTypes

const INITIAL_STATE = {
  session: {},
  errorMessage: null,
  isAuthenticating: false
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_STARTED:
      return merge(state, {
        isAuthenticating: true
      })
    case AUTH_FAILED:
      return merge(state, {
        isAuthenticating: false,
        errorMessage: action.payload
      })
    case AUTH_SUCCEED:
      return merge(state, {
        session: action.payload,
        errorMessage: null
      })
    case AUTH_ENDED:
      return merge(state, {
        isAuthenticating: false
      })
    default:
      return state
  }
}

export default authReducer
