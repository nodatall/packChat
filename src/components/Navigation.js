import React, { Component, PropTypes } from 'react'
import { Text, Navigator, TouchableHighlight } from 'react-native'
import Landing from './Landing'
import SignUp from './SignUp'
import Profile from './Profile'
import SignIn from './SignIn'
import Pack from './Pack'
import Message from './Message'
import Event from './Event'
import io from 'socket.io-client'

window.navigator.userAgent = 'ReactNative'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentEvent: ''
    }
    this.setCurrentEvent = this.setCurrentEvent.bind(this)
    this.socket = io('http://localhost:3002', {
      transports: ['websocket']
    })
    this.socket.on('connect', () => console.log('connected!'))
  }

  setCurrentEvent(event) {
    this.setState({currentEvent: event})
  }

  render() {
    const routes = [
      {title: 'Landing', index: 0},
      {title: 'SignUp', index: 1},
      {title: 'SignIn', index: 2},
      {title: 'Profile', index: 3},
      {title: 'Pack', index: 4},
      {title: 'Event', index: 5},
      {title: 'Message', index: 6},
    ]

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          switch(route.title) {
            case 'Landing':
              return <Landing navigator={navigator} routes={routes}/>
            case 'SignUp':
              return <SignUp navigator={navigator} routes={routes} />
            case 'SignIn':
              return <SignIn navigator={navigator} routes={routes} />
            case 'Profile':
              return <Profile navigator={navigator} routes={routes} socket={this.socket}/>
            case 'Pack':
              return <Pack navigator={navigator} routes={routes} setCurrentEvent={this.setCurrentEvent} />
            case 'Event':
              return <Event navigator={navigator} routes={routes} event={this.state.currentEvent} />
            case 'Message':
              return <Message navigator={navigator} routes={routes} />
          }
        }}
        style={{padding: 100}}
        />
    )
  }
}
