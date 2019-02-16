import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { LIGHT_GRAY, GRAY } from 'src/config/colors'

export const TextFieldIcon = ({ icon, style = {}, ...props }) => (
  <View style={styles.searchSection}>
    <Icon style={styles.searchIcon} name={icon} size={23} color={GRAY} />
    <TextInput style={[styles.input, style]} {...props} />
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
  searchIcon: {
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
