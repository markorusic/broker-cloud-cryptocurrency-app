import React from 'react'
import { FlatList, Dimensions } from 'react-native'
import lang from 'src/lang'
import { SearchField } from 'src/shared/components/logic'
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
  enableSearch = false,
  contentContainerStyle = {},
  ...props
}) => (
  <SearchField
    items={markets}
    enabled={enableSearch}
    searchBy="name"
    icon="search"
    placeholder={lang('Search here')}
  >
    {filteredMarkets => (
      <FlatList
        data={filteredMarkets}
        keyExtractor={keyExtractor}
        renderItem={renderItem(onFollow)}
        showsVerticalScrollIndicator={false}
        {...props}
        contentContainerStyle={[
          contentContainerStyle,
          baseContentCotainerStyle
        ]}
      />
    )}
  </SearchField>
)

export default MarketList
