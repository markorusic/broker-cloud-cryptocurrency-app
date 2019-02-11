import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function ScreenContainer({
  children = null,
  style = {},
  centered = false,
  props
}) {
  return (
    <View
      style={[styles.container, centered ? styles.center : {}, style]}
      {...props}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    justifyContent: 'center'
  }
})
