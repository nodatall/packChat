import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Profile extends Component {
  static navigatorOptions = {
    title: 'Next',
  }
  render() {
    return (
      <View>
        <Text>
          Profile
        </Text>
      </View>
    )
  }
}
