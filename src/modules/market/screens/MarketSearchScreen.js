import React from 'react'
import { Container, TextField } from 'src/shared/components/ui'
import MarketList from '../components/MarketList/MarketList'

const MarketSearchScreen = () => (
  <Container>
    <TextField label="Search here" />
    <MarketList />
  </Container>
)

export default MarketSearchScreen
