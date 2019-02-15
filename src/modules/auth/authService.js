import qs from 'querystring'
import { CLIENT_ID } from 'src/config/api'
import { http } from 'src/shared/services/network'

export default {
  login(credentials) {
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
    return http.post('oauth/token', body, config).then(res => res.data)
  }
}
