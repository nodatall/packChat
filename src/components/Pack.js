import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default class Pack extends Component {
  constructor() {
    super()
    this.state = {
      events: [
        {
          name: 'Soccer Practice',
          time: 'Wednesday at 6pm',
          id: 1,
        }
      ]
    }

    this.handlePress = this.handlePress.bind(this)
  }

  componentWillMount() {
    // Get events
  }

  handlePress(event) {
    const { navigator, routes, setCurrentEvent } = this.props

    setCurrentEvent(event)
    navigator.push(routes[5])
  }

  render() {
    if ( !this.state.events.length ) {
      return <Text>Loading...</Text>
    }

    const events = this.state.events.map( (event, index) => {
      return (
        <TouchableHighlight key={event.id} style={styles.pack} onPress={() => this.handlePress(event)}>
          <View>
            <Text style={styles.headerSmall}>{event.name}</Text>
            <Text style={styles.paragraph}>{event.time}</Text>
          </View>
        </TouchableHighlight>
      )
    })

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Pack Events
        </Text>
        {events}
      </View>
    )
  }
}
