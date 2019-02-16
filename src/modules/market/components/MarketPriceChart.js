import React from 'react'
import { View, StyleSheet } from 'react-native'
// import { PRIMARY_COLOR } from 'src/config/colors'

const formatData = data =>
  data.map(({ time, ...params }) => ({
    x: time,
    y: Object.values(params).reduce((acc, curr) => acc + curr, 0)
  }))

const MarketPriceChart = ({ data }) => (
  <View style={styles.container}>{null}</View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  }
})

export default MarketPriceChart
