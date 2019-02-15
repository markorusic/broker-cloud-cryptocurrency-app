import { Component } from 'react'
import { connect } from 'react-redux'
import { loginEffects } from '../utils'
import { getAuth } from '../selectors'

class AuthLoadingScreen extends Component {
  componentDidMount = () => {
    this.bootstrap()
  }

  bootstrap = () => {
    const { auth, navigation } = this.props
    loginEffects({ navigation, auth })
  }

  render = () => null
}

export default connect(state => ({
  auth: getAuth(state)
}))(AuthLoadingScreen)
