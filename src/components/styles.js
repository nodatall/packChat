import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginBottom: 5
  },
  headerSmall: {
    fontSize: 18,
    marginBottom: 5
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pack: {
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 40,
    width: 200
  },
  paragraph: {
    fontSize: 13
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom: 10,
  }
})

export default styles
