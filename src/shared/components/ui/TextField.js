import React from 'react'
import { TextField as BaseTextField } from 'react-native-material-textfield'
import { PRIMARY_COLOR, ERROR_COLOR } from 'src/config/colors'

const getInputContainerStyle = (errorIndicator, inputContainerStyle) => {
  if (errorIndicator) {
    inputContainerStyle = {
      ...inputContainerStyle,
      ...{
        borderBottomColor: 'red',
        borderBottomWidth: 2
      }
    }
  }
  return inputContainerStyle
}

export const TextField = ({
  errorIndicator = false,
  inputContainerStyle = {},
  ...props
}) => (
  <BaseTextField
    tintColor={PRIMARY_COLOR}
    errorColor={ERROR_COLOR}
    inputContainerStyle={getInputContainerStyle(
      errorIndicator,
      inputContainerStyle
    )}
    {...props}
  />
)
