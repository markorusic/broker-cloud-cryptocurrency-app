import React from 'react'
import { Provider } from 'react-redux'
import AppContainer from './configureNavigation'
import store from './configureStore'

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
