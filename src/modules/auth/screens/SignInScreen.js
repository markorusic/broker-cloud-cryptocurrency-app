import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ScreenContainer from 'src/shared/components/ScreenContainer'
import { TextField, Button } from 'src/shared/components/ui'
import { login } from '../actions'

class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    email: '',
    password: ''
  }

  submitLogin = () => {
    const { email, password } = this.state
    this.props.dispatch(login({ email, password }))
  }

  render() {
    console.log(this.props)
    return (
      <ScreenContainer style={styles.container}>
        <Text style={styles.heading}>Wellcome</Text>
        <View style={styles.fullWidth}>
          <TextField label="Email" />
          <TextField label="Password" />
        </View>
        <Button title="Sing in" uppercase onPress={this.submitLogin} />
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
  }
})

const mapStateToProps = ({ auth }) => ({ auth })
// const mapDispatchToProps = dispatch => ({ mojDispec: dispatch })

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(SignInScreen)
