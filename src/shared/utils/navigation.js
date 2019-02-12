import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { PRIMARY_COLOR } from 'src/config/colors'

export const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: PRIMARY_COLOR
  },
  headerTintColor: '#fff'
}

export const tabBarIcon = name => ({ tintColor }) => (
  <Icon name={name} size={25} color={tintColor} />
)

export const Tab = ({ screen, title, icon }) => ({
  screen: createStackNavigator(
    { screen },
    {
      defaultNavigationOptions
    }
  ),
  navigationOptions: {
    tabBarLabel: title,
    tabBarIcon: tabBarIcon(icon)
  }
})

export const Tabs = tabs =>
  createMaterialBottomTabNavigator(tabs, {
    initialRouteName: 'Search',
    activeColor: PRIMARY_COLOR,
    shifting: true,
    barStyle: { backgroundColor: 'white' }
  })
