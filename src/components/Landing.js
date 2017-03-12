import React, { Component, PropTypes } from 'react'
import { View, TouchableHighlight, Text, Button } from 'react-native'

export default class Landing extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
        title="Create Account"
        onPress={() => navigate('SignUp')}
        />
        <Button
        title="Login"
        onPress={() => navigate('Profile')}
        />
      </View>
    );
  }
}
