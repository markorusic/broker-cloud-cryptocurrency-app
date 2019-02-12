import React from 'react'
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { PRIMARY_COLOR } from './config/colors'
import AuthLoadingScreen from './modules/auth/screens/AuthLoadingScreen'
import SignInScreen from './modules/auth/screens/SignInScreen'
import MarketSearchScreen from './modules/market/screens/MarketSearchScreen'
import FavoritesScreen from './modules/market/screens/FavoritesScreen'

const tabBarIcon = name => ({ tintColor }) => (
  <Icon name={name} size={25} color={tintColor} />
)

const AppStack = createMaterialBottomTabNavigator(
  {
    Search: {
      screen: MarketSearchScreen,
      navigationOptions: {
        tabBarLabel: 'Market Search',
        tabBarIcon: tabBarIcon('view-list')
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: tabBarIcon('heart')
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
