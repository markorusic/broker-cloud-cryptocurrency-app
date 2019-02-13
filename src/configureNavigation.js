import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { Tab, Tabs, StackNavigator } from 'src/shared/utils/navigation'
import AuthLoadingScreen from './modules/auth/screens/AuthLoadingScreen'
import SignInScreen from './modules/auth/screens/SignInScreen'
import MarketSearchScreen from './modules/market/screens/MarketSearchScreen'
import FavoritesScreen from './modules/market/screens/FavoritesScreen'
import MarketEntryScreen from './modules/market/screens/MarketEntryScreen'

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

const TabStack = Tabs({
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

const AppStack = createStackNavigator(
  {
    Tabs: TabStack,
    MarketEntryModal: StackNavigator({ screen: MarketEntryScreen })
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  })
)

export default AppContainer
