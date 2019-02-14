import { Component } from 'react'
import { connect } from 'react-redux'
import { loginEffects } from '../utils'

class AuthLoadingScreen extends Component {
  componentDidMount = () => {
    this.bootstrap()
  }

  bootstrap = () => {
    const { session } = this.props.auth
    loginEffects({
      navigation: this.props.navigation,
      session
    })
  }

  render = () => null
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(AuthLoadingScreen)
