import React from 'react'
import { FlatList } from 'react-native'
import { keyExtractor } from 'src/shared/utils'
import MarketListItem from './MarketListItem'
import { markets as mockupMarkets } from '../../mockup'

const renderItem = ({ item }) => <MarketListItem market={item} />

const MarketList = ({ markets = mockupMarkets, ...props }) => (
  <FlatList
    data={markets}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    {...props}
  />
)

export default MarketList
