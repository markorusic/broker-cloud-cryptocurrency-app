import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Svg, { Polyline } from 'react-native-svg'
import { PRIMARY_COLOR } from 'src/config/colors'

const scaleBetween = ({ value, minAllowed = 0, maxAllowed, min, max }) =>
  ((maxAllowed - minAllowed) * (value - min)) / (max - min) + minAllowed

const scaleAxisValue = (data, calcValue, maxAllowed) => {
  let min, max
  const values = []
  for (let i = 0; i < data.length; i++) {
    const current = data[i]
    const value = calcValue(current)
    values.push(value)
    if (i === 0) {
      min = value
      max = value
    } else if (value > max) {
      max = value
    } else if (value < min) {
      min = value
    }
  }
  const scaledValues = []
  for (let i = 0; i < values.length; i++) {
    const value = values[i]
    scaledValues.push(
      scaleBetween({
        maxAllowed,
        value,
        min,
        max
      })
    )
  }
  return scaledValues
}

const formatData = (data, MAX_X, MAX_Y) => {
  const calcX = ({ time }) => new Date(time).valueOf()
  const calcY = ({ time, ...params }) => {
    const values = Object.values(params)
    const sum = values.reduce((acc, curr) => acc + curr, 0)
    return sum / values.length
  }
  const xs = scaleAxisValue(data, calcX, MAX_X)
  const ys = scaleAxisValue(data, calcY, MAX_Y)
  return xs.map((x, index) => `${x},${ys[index]}`).join(', ')
}

const MarketPriceChart = ({ data }) => {
  const { width } = Dimensions.get('window')
  const height = 100
  return (
    <View style={styles.container}>
      <Svg height={height} width={width}>
        <Polyline
          points={formatData(data, width, height)}
          fill="none"
          strokeWidth="3"
          stroke={PRIMARY_COLOR}
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MarketPriceChart
