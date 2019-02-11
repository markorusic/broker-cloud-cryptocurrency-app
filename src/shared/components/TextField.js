import React from 'react'
import { TextField as BaseTextField } from 'react-native-material-textfield'
import { PRIMARY_COLOR, ERROR_COLOR } from 'app/config/colors'

export default function TextField(props) {
  return (
    <BaseTextField
      tintColor={PRIMARY_COLOR}
      errorColor={ERROR_COLOR}
      {...props}
    />
  )
}
