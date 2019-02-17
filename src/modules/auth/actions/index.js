import { createAsyncAction } from 'src/shared/utils/redux'
import { AUTH_LOGOUT } from './actionTypes'
import authService from '../authService'

export const login = createAsyncAction('AUTH', authService.login)

export const logout = () => ({
  type: AUTH_LOGOUT
})
