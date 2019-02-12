import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { noop } from 'src/shared/utils/fn'

export const TouchableIcon = ({
  size = 30,
  containerStyle = {},
  onPress = noop,
  ...props
}) => (
  <TouchableOpacity style={containerStyle} onPress={onPress}>
    <Icon size={size} {...props} />
  </TouchableOpacity>
)
