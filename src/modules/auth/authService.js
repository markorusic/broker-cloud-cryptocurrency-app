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
    const [err, data] = await to(
      http.post('oauth/token', body, config).then(async res => {
        const session = res.data
        const user = await self.fetchUser(session)
        return { session, user }
      })
    )
    if (err) {
      throw err
    }
    return data
  },
  fetchUser(session) {
    const config = {
      headers: {
        Authorization: `Bearer ${session.accessToken}`
      }
    }
    return http.get('users/me', config).then(res => {
      const { accounts, ...user } = res.data
      return {
        ...user,
        account: accounts[0]
      }
    })
  }
}

export default self
