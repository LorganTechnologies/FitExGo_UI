import { LogBox, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { colors } from './src/res/colors'
import RootNavigation from './src/navigations/rootNavigation'

const App = () => {

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor={colors.transparent} translucent />
      <RootNavigation />
    </NavigationContainer>
  )
}

export default App