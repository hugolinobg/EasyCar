import { StyleSheet } from 'react-native'
import { colorsTheme } from '../../constants/themes/themes.js'

export default StyleSheet.create({
  btnYellow: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorsTheme.yellow,
    padding: 20,
  },

  textDark: {
    color: colorsTheme.black,
    fontSize: 18,
    fontWeight: 'bold',
  },

  btnRed: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorsTheme.red,
    padding: 20,
  },

  textLight: {
    color: colorsTheme.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
