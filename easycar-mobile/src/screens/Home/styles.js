import { StyleSheet } from 'react-native'
import { colorsTheme } from '../../constants/themes/themes.js'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageLogo: {
    width: 200,
    height: 45,
    margin: 30,
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },

  imagePassenger: {
    width: 160,
    height: 160,
  },

  imageDriver: {
    width: 160,
    height: 160,
  },

  title: {
    color: colorsTheme.white,
    fontSize: 22,
    fontWeight: 'bold',
  },

  text: {
    color: colorsTheme.white,
    fontSize: 14,
  },
})
