import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ScreenContainer from 'src/shared/components/ScreenContainer'
import { TextField, Button } from 'src/shared/components/ui'

export default class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ScreenContainer style={styles.container}>
        <Text style={styles.heading}>Wellcome</Text>
        <View style={styles.fullWidth}>
          <TextField label="Email" />
          <TextField label="Password" />
        </View>
        <Button title="Sing in" uppercase />
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 100,
    paddingHorizontal: 50
  },
  heading: {
    fontSize: 32,
    fontWeight: '500'
  },
  fullWidth: {
    width: '100%'
  }
})
