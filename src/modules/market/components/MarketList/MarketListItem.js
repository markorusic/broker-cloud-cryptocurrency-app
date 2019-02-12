import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { GRAY, DARK_GRAY } from 'src/config/colors'
import { TouchableIcon } from 'src/shared/components/ui'
import { noop } from 'src/shared/utils/fn'
import { formatValue } from '../../utils'

const MarketListItem = ({ market, onPress = noop }) => (
  <View style={[styles.flexRow, styles.container]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.name}>{market.name}</Text>
    </TouchableOpacity>
    <View style={styles.flexRow}>
      <Text style={styles.price}>{formatValue(market.volume)}</Text>
      <TouchableIcon name="heart-outline" color={GRAY} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    paddingVertical: 18,
    paddingHorizontal: 3,
    borderBottomColor: '#e3e9ec',
    borderBottomWidth: 0.7
  },
  name: {
    fontSize: 18,
    color: DARK_GRAY
  },
  price: {
    fontSize: 18,
    marginRight: 18,
    color: GRAY
  }
})
export default MarketListItem