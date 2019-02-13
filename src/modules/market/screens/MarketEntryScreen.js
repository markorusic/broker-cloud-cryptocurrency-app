import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { HeaderBackButton, NavigationActions } from 'react-navigation'

export default class MarketEntryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.market.name,
    headerLeft: (
      <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.dispatch(NavigationActions.back())
        }}
      />
    )
  })

  render() {
    return (
      <View>
        <Text>MarketEntryScreen</Text>
      </View>
    )
  }
}
