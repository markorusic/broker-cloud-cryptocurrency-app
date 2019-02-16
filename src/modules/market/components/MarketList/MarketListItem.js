import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { GRAY, LIGHT_GRAY, DARK_GRAY, LIKE_COLOR } from 'src/config/colors'
import { TouchableIcon } from 'src/shared/components/ui'
import { noop } from 'src/shared/utils/fn'
import { formatValue } from '../../utils'

const MarketListItem = ({
  market,
  navigation,
  onPress = () => navigation.navigate('MarketEntryModal', { market }),
  onFollow = noop
}) => (
  <View style={[styles.flexRow, styles.container]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.name}>{market.name}</Text>
    </TouchableOpacity>
    <View style={styles.flexRow}>
      <Text style={styles.price}>{formatValue(market.volume)}</Text>
      <TouchableIcon
        name={market.following ? 'heart' : 'heart-outline'}
        color={market.following ? LIKE_COLOR : GRAY}
        onPress={() => {
          onFollow({
            market,
            following: !market.following
          })
        }}
      />
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
    borderBottomColor: LIGHT_GRAY,
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
export default withNavigation(MarketListItem)
