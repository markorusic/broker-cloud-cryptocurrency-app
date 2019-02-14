import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ScreenContainer from 'src/shared/components/ScreenContainer'
import { Loader } from 'src/shared/components/ui'
import AppContainer from './configureNavigation'
import configureStore from './configureStore'

const { store, persistor } = configureStore()
const loading = (
  <ScreenContainer centered>
    <Loader />
  </ScreenContainer>
)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={loading} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  )
}
