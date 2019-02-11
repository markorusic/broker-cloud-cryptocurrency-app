import React from 'react'
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from 'react-native'
import { PRIMARY_COLOR } from './config/colors'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import SignInScreen from './screens/SignInScreen'

const AppStack = createMaterialBottomTabNavigator(
  {
    Search: {
      screen: () => <Text>Market Search</Text>,
      navigationOptions: {
        tabBarLabel: 'Market Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="view-list" size={25} color={tintColor} />
        )
      }
    },
    Favorites: {
      screen: () => <Text>Favorites</Text>,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: 'Search',
    activeColor: PRIMARY_COLOR,
    shifting: true,
    barStyle: { backgroundColor: 'white' }
  }
)
const AuthStack = createStackNavigator({ SignIn: SignInScreen })

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)

export default function App() {
  return <AppContainer />
}
