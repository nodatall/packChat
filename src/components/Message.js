import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class Message extends Component {
  render() {
    const { message } = this.props
    return (
      <View>
        <Text style={styles.headerSmall}>Elle</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={{marginTop: 10}}> Awaiting response....</Text>
      </View>
    )
  }
}
