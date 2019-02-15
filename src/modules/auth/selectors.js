import dayjs from 'dayjs'

export const getAuth = state => {
  const { session } = state.auth
  const { accessToken, refreshToken, expiresAt } = session
  const hasExpired = !expiresAt || dayjs().isAfter(dayjs(expiresAt))
  const isAuthenticated = accessToken && refreshToken && !hasExpired
  return {
    ...state.auth,
    isAuthenticated
  }
}
export const getUser = state => state.auth.userInfo
