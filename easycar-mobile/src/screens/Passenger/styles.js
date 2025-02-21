import { StyleSheet } from 'react-native'
import { colorsTheme } from '../../constants/themes/themes.js'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
  },

  marker: {
    width: 60,
    height: 60,
  },

  footer: {
    backgroundColor: colorsTheme.white,
  },

  footerFields: {
    margin: 10,
  },

  footerText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  textTitle: {
    fontWeight: 'bold',
  },

  text: {
    color: colorsTheme.black,
  },

  input: {
    backgroundColor: colorsTheme.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colorsTheme.gray,
    margin: 5,
    padding: 10,
  },
})
