import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
    navigator.jumpTo(routes[3])
  }

  render() {
    const { navigator, routes } = this.props
    return (
      <View>
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
        title="Sign In"
        onPress={this.handlePress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom: 10,
  }
})
