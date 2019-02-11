import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import ScreenContainer from 'app/shared/components/ScreenContainer'
import Loader from 'app/shared/components/Loader'

export default class AuthLoadingScreen extends Component {
  componentDidMount = () => {
    this.bootstrapAsync()
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <ScreenContainer centered>
        <Loader />
      </ScreenContainer>
    )
  }
}
