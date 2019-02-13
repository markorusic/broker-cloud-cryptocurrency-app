import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScreenContainer from 'src/shared/components/ScreenContainer'
import { Loader } from 'src/shared/components/ui'

class AuthLoadingScreen extends Component {
  componentDidMount = () => {
    this.bootstrap()
  }

  bootstrap = () => {
    const { session } = this.props.auth
    this.props.navigation.navigate(session.access_token ? 'App' : 'Auth')
  }

  render = () => (
    <ScreenContainer centered>
      <Loader />
    </ScreenContainer>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(AuthLoadingScreen)
