import { createAsyncAction } from 'src/shared/utils/redux'
import authService from '../authService'

export const login = createAsyncAction('AUTH', authService.login)
