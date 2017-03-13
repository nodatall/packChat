import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import styles from './styles'

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Parents, my car broke down on the way to Crissy field to pick up Jason. Could one of you bring him home please.' };

    this.handlePress = this.handlePress.bind(this)
    this.canHelp = this.canHelp.bind(this)
    this.nopeSorry = this.nopeSorry.bind(this)
  }

  handlePress() {
    const { navigator, routes, socket, setCurrentMessage } = this.props

    setCurrentMessage(this.state.text)
    socket.emit('crisis', {message: this.state.text, packId: 1, childId: 1})
    navigator.push(routes[5])
  }

  canHelp() {
    const { socket } = this.props
    socket.emit('acceptChallenge', {crisisId: 1, saviorId: 1})
  }

  nopeSorry() {
    const { socket } = this.props
    socket.emit('refuseChallenge', {crisisId: 1, parentId: 1})
  }

  render() {
    const { event, crisis } = this.props

    const crisisSection = crisis.message ?
      (
        <View style={styles.crisis}>
          <Text style={{color:'red'}}>HELP!</Text>
          <Text>{crisis.message}</Text>
          <Button title='I can help' onPress={this.canHelp}/>
          <Button title='Nope, sorry' onPress={this.nopeSorry}/>
        </View>
      ) : null

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
        <Button color="red" onPress={this.handlePress} title="Send Crisis Message"/>
        {crisisSection}
      </View>
    )
  }
}
