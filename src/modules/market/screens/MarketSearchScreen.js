import React, { Component } from 'react'
import { Container, TextField } from 'src/shared/components/ui'
import MarketList from '../components/MarketList/MarketList'

export default class MarketSearchScreen extends Component {
  static navigationOptions = {
    title: 'Market Search'
  }

  render() {
    return (
      <Container>
        <TextField label="Search here" />
        <MarketList />
      </Container>
    )
  }
}
