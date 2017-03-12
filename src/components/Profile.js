import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      packs: [
        {
          packName: 'Soccer Team',
          packDescription: 'San Francisco kids olympic soccer team.'
        },
        {
          packName: 'Nap Group',
          packDescription: 'Oakland\'s national competitive nap group.'
        }
      ]
    }
  }

  componentWillMount() {
    const { socket } = this.props
    // socket.emit('getPacks')
  }

  render() {
    if ( !this.state.packs.length ) {
      return <Text> Loading... </Text>
    }

    const { navigator, routes } = this.props

    const packs = this.state.packs.map( (pack, index) => {
      return (
        <TouchableHighlight key={`pack ${index}`} style={styles.pack} onPress={() => navigator.push(routes[4])}>
          <View>
            <Text style={styles.headerSmall}>{pack.packName}</Text>
            <Text style={styles.paragraph}>{pack.packDescription}</Text>
          </View>
        </TouchableHighlight>
      )
    })

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          My Kid's Packs
        </Text>
        {packs}
      </View>
    )
  }
}
