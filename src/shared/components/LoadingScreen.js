import React from 'react'
import ScreenContainer from 'src/shared/components/ScreenContainer'
import { Loader } from 'src/shared/components/ui'

const LoadingScreen = () => (
  <ScreenContainer centered>
    <Loader />
  </ScreenContainer>
)

export default LoadingScreen
