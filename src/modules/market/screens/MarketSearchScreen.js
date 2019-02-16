import React from 'react'
import { Container } from 'src/shared/components/ui'
import MarketListContainer from '../containers/MarketList'

const MarketSearchScreen = () => (
  <Container>
    <MarketListContainer enableSearch />
  </Container>
)

export default MarketSearchScreen
