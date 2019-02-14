import { http } from 'src/shared/services/network'

export const loginEffects = ({ navigation, session }) => {
  let nextScreen = 'Auth'
  if (session && session.accessToken) {
    http.setHeader('Authorization', `Bearer ${session.accessToken}`)
    nextScreen = 'App'
  }
  navigation.navigate(nextScreen)
}
