import React from 'react'
import { Container, TextField } from 'src/shared/components/ui'
import MarketListContainer from '../containers/MarketList'

const MarketSearchScreen = () => (
  <Container>
    <TextField label="Search here" />
    <MarketListContainer />
  </Container>
)

export default MarketSearchScreen
