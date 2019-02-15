import to from 'await-to-js'
import qs from 'querystring'
import { CLIENT_ID } from 'src/config/api'
import { http } from 'src/shared/services/network'

const self = {
  async login(credentials) {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const body = qs.stringify({
      username: credentials.email,
      password: credentials.password,
      grant_type: 'password',
      client_id: CLIENT_ID
    })
    const [err, res] = await to(http.post('oauth/token', body, config))
    if (err) {
      throw err
    }
    const session = res.data
    const [userInfoErr, userInfo] = await to(self.fetchUserInfo(session))
    if (userInfoErr) {
      throw userInfoErr
    }
    return {
      session,
      userInfo
    }
  },
  fetchUserInfo: session => {
    const config = {
      headers: {
        Authorization: `Bearer ${session.accessToken}`
      }
    }
    return http.get('users/me', config).then(res => res.data)
  }
}

export default self
