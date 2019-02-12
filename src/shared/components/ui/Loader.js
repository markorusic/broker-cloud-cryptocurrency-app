import React from 'react'
import { ActivityIndicator } from 'react-native'
import { PRIMARY_COLOR } from 'src/config/colors'

export const Loader = props => (
  <ActivityIndicator size="large" color={PRIMARY_COLOR} {...props} />
)
