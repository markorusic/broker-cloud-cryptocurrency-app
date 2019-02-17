import { merge } from 'src/shared/utils'
import { AUTH } from './actions/actionTypes'

const INITIAL_STATE = {
  session: {},
  user: {},
  error: null,
  isAuthenticating: false
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH.STARTED:
      return merge(state, {
        isAuthenticating: true
      })
    case AUTH.FAILED:
      return merge(state, {
        isAuthenticating: false,
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
    default:
      return state
  }
}

export default authReducer
