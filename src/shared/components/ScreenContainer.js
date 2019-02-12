import React from 'react'
import { View, StyleSheet } from 'react-native'

const ScreenContainer = ({
  children = null,
  style = {},
  centered = false,
  ...props
}) => (
  <View
    style={[styles.container, centered ? styles.center : {}, style]}
    {...props}
  >
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    justifyContent: 'center'
  }
})

export default ScreenContainer
