import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import SinginScreen from './screens/SinginScreen'

const AppNavigator = createStackNavigator({
  Singin: SinginScreen
})

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  return <AppContainer />
}
