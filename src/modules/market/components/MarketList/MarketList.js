import React from 'react'
import { FlatList } from 'react-native'
import { keyExtractor } from 'src/shared/utils'
import { noop } from 'src/shared/utils/fn'
import MarketListItem from './MarketListItem'

const renderItem = ({ item }) => <MarketListItem market={item} />

const MarketList = ({ markets = [], onRefresh = noop, refreshing = false }) => (
  <FlatList
    data={markets}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
    onRefresh={onRefresh}
    refreshing={refreshing}
    showsVerticalScrollIndicator={false}
  />
)

export default MarketList
