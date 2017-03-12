import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import styles from './styles'

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Parents, my car broke down on the way to Crissy field to pick up Jason. Could one of you bring him home please.' };
  }

  render() {
    const { event, navigator, routes } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.headerSmall}>{event.name}</Text>
        <Text>{event.time}</Text>
        <TextInput
          style={styles.textArea}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={true}
          placeholder='Enter crisis message'
        />
        <Button color="red" onPress={() => navigator.push(routes[6])} title="Send Crisis Message"/>
      </View>
    )
  }
}
