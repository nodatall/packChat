import React, { Component, PropTypes } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import styles from './styles'

export default class Landing extends Component {
  render() {
    const { navigator, routes } = this.props
    const logo = require('../images/packChatLogo.png')
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pack Chat</Text>
        <Image
          style={{width: 100, height: 100, marginBottom: 250,}}
          source={logo}
        />
        <Button
        title="Create Account"
        onPress={() => navigator.push(routes[1])}
        />
        <Button
        title="Login"
        onPress={() => {
          navigator.jumpTo(routes[2])
        }}
        />
      </View>
    )
  }
}
