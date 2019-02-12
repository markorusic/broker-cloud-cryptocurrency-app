import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Container = ({ style = {}, children, ...props }) => (
  <View style={[styles.container, style]} {...props}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15
  }
})
