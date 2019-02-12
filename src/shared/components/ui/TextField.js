import React from 'react'
import { TextField as BaseTextField } from 'react-native-material-textfield'
import { PRIMARY_COLOR, ERROR_COLOR } from 'src/config/colors'

export const TextField = props => (
  <BaseTextField
    tintColor={PRIMARY_COLOR}
    errorColor={ERROR_COLOR}
    {...props}
  />
)
