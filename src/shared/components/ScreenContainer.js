import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default function ScreenContainer({ children, style = {}, props }) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // borderColor: 'red',
    // borderWidth: 2
  }
})
