import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import to from 'await-to-js'
import lang from 'src/lang'
import { ERROR_COLOR } from 'src/config/colors'
import ScreenContainer from 'src/shared/components/ScreenContainer'
import { TextField, Button } from 'src/shared/components/ui'
import { login } from '../actions'
import { getAuth } from '../selectors'
import { loginEffects, validateForm } from '../utils'

class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    email: 'markousp5@gmail.com',
    password: 'Marko1234',
    errors: {},
    serverError: null
  }

  onChangeText = prop => value => {
    this.setState({
      [prop]: value
    })
  }

  submitLogin = async () => {
    const { email, password } = this.state
    const errors = validateForm({ email, password })
    this.setState({ errors })
    if (Object.keys(errors).length !== 0) {
      return
    }
    const [err] = await to(this.props.dispatch(login({ email, password })))
    if (err) {
      return this.setState({
        serverError: err.response.data.message
      })
    }
    const { auth, navigation } = this.props
    loginEffects({ auth, navigation })
  }

  render() {
    const { email, password, errors, serverError } = this.state
    return (
      <ScreenContainer style={styles.container}>
        <Text style={styles.heading}>{lang('auth.wellcome')}</Text>
        <View style={styles.fullWidth}>
          <TextField
            value={email}
            label={lang('commons.email')}
            onChangeText={this.onChangeText('email')}
            error={errors.email}
            errorIndicator={serverError}
          />
          <TextField
            secureTextEntry
            value={password}
            label={lang('commons.password')}
            onChangeText={this.onChangeText('password')}
            autoComplete="password"
            error={errors.password}
            errorIndicator={serverError}
          />
        </View>
        <View style={styles.submitButtonWrapper}>
          {serverError && <Text style={styles.errorText}>{serverError}</Text>}
          <Button
            title={lang('auth.signIn')}
            uppercase
            loading={this.props.auth.isAuthenticating}
            onPress={this.submitLogin}
          />
        </View>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 100,
    paddingHorizontal: 50
  },
  heading: {
    fontSize: 32,
    fontWeight: '500'
  },
  fullWidth: {
    width: '100%'
  },
  submitButtonWrapper: {
    width: '100%',
    alignItems: 'center'
  },
  errorText: {
    color: ERROR_COLOR,
    marginBottom: 10
  }
})

export default connect(state => ({
  auth: getAuth(state)
}))(SignInScreen)
