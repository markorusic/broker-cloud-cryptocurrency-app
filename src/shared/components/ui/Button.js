import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { PRIMARY_COLOR, GRAY } from 'src/config/colors'
import { uppercase as uc } from 'src/shared/utils'
import { Loader } from './Loader'

export const Button = ({
  title = '',
  style = {},
  titleStyle = {},
  uppercase = false,
  loading = false,
  ...props
}) => (
  <Ripple
    style={[styles.container(loading), style]}
    disabled={loading}
    {...props}
  >
    {loading ? (
      <Loader size="small" color="white" />
    ) : (
      <Text style={[styles.titleText, titleStyle]}>
        {uppercase ? uc(title) : title}
      </Text>
    )}
  </Ripple>
)

const styles = StyleSheet.create({
  container: loading => ({
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: loading ? GRAY : PRIMARY_COLOR
  }),
  titleText: {
    color: 'white',
    fontSize: 15
  }
})
