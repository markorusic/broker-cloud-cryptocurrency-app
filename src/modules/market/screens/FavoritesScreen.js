import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FavoritesScreen extends Component {
  static navigationOptions = {
    title: 'Favorites'
  }

  render() {
    return (
      <View>
        <Text>Favorites</Text>
      </View>
    )
  }
}
