import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { LIGHT_GRAY, GRAY } from 'src/config/colors'
import { noop } from 'src/shared/utils'
import { TouchableIcon } from './TouchableIcon'

export const TextFieldIcon = ({
  icon,
  onReset = noop,
  value,
  style = {},
  ...props
}) => (
  <View style={styles.searchSection}>
    <Icon style={styles.icon} name={icon} size={23} color={GRAY} />
    <TextInput style={[styles.input, style]} value={value} {...props} />
    {!!value && (
      <TouchableIcon
        style={styles.icon}
        name="close"
        size={23}
        color={GRAY}
        onPress={onReset}
      />
    )}
  </View>
)

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderColor: LIGHT_GRAY,
    borderWidth: 1
  },
  icon: {
    padding: 12
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontWeight: '600'
  }
})
