import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ScreenContainer from 'src/shared/components/ScreenContainer'
import { Loader } from 'src/shared/components/ui'
import http, { httpEventTypes } from './shared/services/network/http'
import { logout } from './modules/auth/actions'
import { getAuth } from './modules/auth/selectors'
import { loginEffects } from './modules/auth/utils'
import { noop } from './shared/utils'
import navigatorService from './shared/services/navigation'
import AppContainer from './configureNavigation'
import configureStore from './configureStore'

const { store, persistor } = configureStore()
const loading = (
  <ScreenContainer centered>
    <Loader />
  </ScreenContainer>
)

export default class App extends Component {
  removeUnautorizedListener = noop

  componentDidMount = () => {
    this.removeUnautorizedListener = http.events.addListener(
      httpEventTypes.UNAUTHORIZED,
      this.handleUnautorizedRequest
    )
  }

  componentWillUnmount = () => {
    this.removeUnautorizedListener()
  }

  handleUnautorizedRequest = () => {
    store.dispatch(logout())
    loginEffects({
      navigation: navigatorService,
      auth: getAuth(store.getState())
    })
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={loading} persistor={persistor}>
          <AppContainer
            ref={navigatorRef => {
              navigatorService.setContainer(navigatorRef)
            }}
          />
        </PersistGate>
      </Provider>
    )
  }
}
