import React from 'react'
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { Tab, Tabs } from 'src/shared/utils/navigation'
import AuthLoadingScreen from './modules/auth/screens/AuthLoadingScreen'
import SignInScreen from './modules/auth/screens/SignInScreen'
import MarketSearchScreen from './modules/market/screens/MarketSearchScreen'
import FavoritesScreen from './modules/market/screens/FavoritesScreen'

const AppStack = Tabs({
  Search: Tab({
    screen: MarketSearchScreen,
    title: 'Market Search',
    icon: 'view-list'
  }),
  Favorites: Tab({
    screen: FavoritesScreen,
    title: 'Favorites',
    icon: 'heart'
  })
})

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  })
)

export default function App() {
  return <AppContainer />
}
