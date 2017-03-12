import React, { Component, PropTypes } from 'react'
import { StackNavigator } from 'react-navigation'
import Landing from './Landing'
import SignUp from './SignUp'
import Profile from './Profile'

const App = StackNavigator({
  Landing: {screen: Landing},
  SignUp: {screen: SignUp},
  Profile: {screen: Profile},
})

export default App
