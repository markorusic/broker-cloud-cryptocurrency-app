import React, { Component } from 'react'
import { Container } from 'src/shared/components/ui'
import MarketList from '../components/MarketList/MarketList'

class MarketSearchScreen extends Component {
  static navigationOptions = {
    title: 'Market Search'
  }

  render() {
    return (
      <Container>
        <MarketList />
      </Container>
    )
  }
}

export default MarketSearchScreen
