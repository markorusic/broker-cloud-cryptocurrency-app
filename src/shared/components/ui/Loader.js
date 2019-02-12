import React from 'react'
import { ActivityIndicator } from 'react-native'
import { PRIMARY_COLOR } from 'src/config/colors'

export function Loader(props) {
  return <ActivityIndicator size="large" color={PRIMARY_COLOR} {...props} />
}
