import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { PRIMARY_COLOR } from 'src/config/colors'

export const Section = ({ title = '', children }) => (
  <View>
    <Text style={styles.title}>{title.toUpperCase()}</Text>
    <View style={styles.container}>{children}</View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15
  },
  title: {
    color: PRIMARY_COLOR,
    fontSize: 18
  }
})
