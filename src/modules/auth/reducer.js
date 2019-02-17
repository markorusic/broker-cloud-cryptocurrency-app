import { merge } from 'src/shared/utils'
import { AUTH, AUTH_LOGOUT } from './actions/actionTypes'

const INITIAL_STATE = {
  session: {},
  user: {},
  error: null,
  isAuthenticating: false,
  credentials: {}
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH.STARTED:
      return merge(state, {
        isAuthenticating: true,
        credentials: action.payload[0]
      })
    case AUTH.FAILED:
      return merge(state, {
        isAuthenticating: false,
        credentials: {},
        error: action.payload
      })
    case AUTH.SUCCEED:
      return merge(state, {
        session: action.payload.session,
        user: action.payload.user,
        error: null
      })
    case AUTH.ENDED:
      return merge(state, {
        isAuthenticating: false
      })
    case AUTH_LOGOUT: {
      const { credentials, ...logoutState } = INITIAL_STATE
      return merge(state, logoutState)
    }
    default:
      return state
  }
}

export default authReducer
