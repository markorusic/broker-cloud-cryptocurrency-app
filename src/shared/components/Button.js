import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { PRIMARY_COLOR } from 'app/config/colors'
import { uppercase as uc } from 'app/shared/utils'

export default function Button({
  title = '',
  style = {},
  textStyle = {},
  uppercase = false,
  ...props
}) {
  return (
    <Ripple style={[styles.container, style]} {...props}>
      <Text style={[styles.titleText, textStyle]}>
        {uppercase ? uc(title) : title}
      </Text>
    </Ripple>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR
  },
  titleText: {
    color: 'white',
    fontSize: 15
  }
})
