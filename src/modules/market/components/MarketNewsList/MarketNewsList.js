import React from 'react'
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native'
import lang from 'src/lang'
import { PRIMARY_COLOR } from 'src/config/colors'
import { keyExtractor } from 'src/shared/utils'
import { Section } from 'src/shared/components/ui'
import MarketNewsListItem from './MarketNewsListItem'

const renderItem = ({ item, index }) => (
  <MarketNewsListItem newsEntry={item} index={index} />
)

const MarketNewsList = ({ news, showLoadMore = false, loadMore, ...props }) => (
  <Section title={lang('News')}>
    <FlatList
      data={news}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      {...props}
    />
    {loadMore && showLoadMore && (
      <TouchableOpacity style={styles.showMore} onPress={loadMore}>
        <Text style={styles.showMoreTitle}>
          {lang('Show more').toUpperCase()}
        </Text>
      </TouchableOpacity>
    )}
  </Section>
)

const styles = StyleSheet.create({
  showMore: {
    paddingTop: 30,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  showMoreTitle: {
    fontSize: 18,
    color: PRIMARY_COLOR
  }
})

export default MarketNewsList
