import React from 'react'
import { ActivityIndicator } from 'react-native'
import { PRIMARY_COLOR } from 'app/config/colors'

export default function Loader(props) {
  return <ActivityIndicator size="large" color={PRIMARY_COLOR} {...props} />
}
