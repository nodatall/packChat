import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class SignUp extends Component {
  static navigatorOptions = {
    title: 'Next',
  }
  render() {
    const { navigate } = this.props.navigation
    
    return (
      <View>
        <Button
        title="Sign Up"
        onPress={() => navigate('Profile')}
        />
      </View>
    )
  }
}
