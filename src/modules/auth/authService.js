// import { AsyncStorage } from 'react-native'

export default {
  async login() {
    const result = await Promise.resolve({
      access_token: '6929bcf8cc77aa177dd127e82a4dee54b67d0c04',
      token_type: 'Bearer',
      refreshToken: 'bd62c08f1447dedeb33419734e2db8e6d89bff1f',
      expiresAt: '2019-02-12T22:50:14.816Z',
      expiresIn: 3600,
      accessToken: '6929bcf8cc77aa177dd127e82a4dee54b67d0c04',
      refresh_token: 'bd62c08f1447dedeb33419734e2db8e6d89bff1f',
      expires_at: '2019-02-12T22:50:14.816Z',
      expires_in: 3600
    })
    return result
    // AsyncStorage.setItem('userData', JSON.stringify(result))
    // return result
  }
}
