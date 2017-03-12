/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Image,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PackChat extends Component {
  _onPress() {
    Alert.alert('Oh shit! Missing page!');
   }
  render() {
    const routes = [
    {title: 'Sign In', index: 0},
    {title: 'Sign Out', index: 1},
  ];
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{width: 250, height: 250}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
        </View>
        <Text style={styles.welcome}>
          Welcome to PackChat
        </Text>
        <Text style={styles.instructions}>
          Welcome Back!
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="Sign In!" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
        <Text style={styles.instructions}>
          To get started, please sign up!
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="Sign Up!" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#555555',
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});

AppRegistry.registerComponent('packChat', () => PackChat);
