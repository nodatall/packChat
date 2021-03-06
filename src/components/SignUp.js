import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import styles from './styles'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    const { navigator, routes } = this.props
    for ( let key in this.state ) {
      if ( this.state[key] == '' ) {
        alert('Please enter your ' + key)
        return
      }
    }
    navigator.push(routes[3])
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
          style={styles.textinput}
          placeholder='name'
        />
        <TextInput
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          style={styles.textinput}
          placeholder='email'
        />
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          style={styles.textinput}
          placeholder='password'
        />
        <Button
        title="Sign Up"
        onPress={this.handlePress}
        />
      </View>
    )
  }
}
