import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 40,
    padding: 8,
    backgroundColor: 'darkmagenta',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
})
