import lang from 'src/lang'
import { http } from 'src/shared/services/network'

export const loginEffects = ({ navigation, auth }) => {
  let nextScreen = 'Auth'
  if (auth.isAuthenticated) {
    http.setHeader('Authorization', `Bearer ${auth.session.accessToken}`)
    nextScreen = 'App'
  }
  navigation.navigate(nextScreen)
}

export const validateEmail = email =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  )

export const validateForm = ({ email, password }) => {
  const errors = {}

  if (!email) {
    errors.email = lang('auth.emailRequired')
  } else if (!validateEmail(email)) {
    errors.email = lang('auth.invalidEmail')
  }

  if (!password) {
    errors.password = lang('auth.passwordRequired')
  }
  return errors
}
