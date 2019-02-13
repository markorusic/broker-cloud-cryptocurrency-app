import React, { Component } from 'react'
import { Container, TextField } from 'src/shared/components/ui'
import MarketList from '../components/MarketList/MarketList'

export default class FavoritesScreen extends Component {
  static navigationOptions = {
    title: 'Favorites'
  }

  render() {
    return (
      <Container>
        <MarketList />
      </Container>
    )
  }
}
