import React from 'react'
import { FlatList, Dimensions } from 'react-native'
import { keyExtractor } from 'src/shared/utils'
import { noop } from 'src/shared/utils/fn'
import MarketListItem from './MarketListItem'

const renderItem = onFollow => ({ item }) => (
  <MarketListItem market={item} onFollow={onFollow} />
)

const baseContentCotainerStyle = {
  minHeight: Dimensions.get('window').height
}

const MarketList = ({
  markets,
  onFollow = noop,
  contentContainerStyle = {},
  ...props
}) => (
  <FlatList
    data={markets}
    keyExtractor={keyExtractor}
    renderItem={renderItem(onFollow)}
    showsVerticalScrollIndicator={false}
    {...props}
    contentContainerStyle={[contentContainerStyle, baseContentCotainerStyle]}
  />
)

export default MarketList
