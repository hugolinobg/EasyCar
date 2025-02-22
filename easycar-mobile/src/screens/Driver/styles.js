import { StyleSheet } from 'react-native'
import { colorsTheme, fontSizes } from '../../constants/themes/themes.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsTheme.white,
  },

  btn: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colorsTheme.gray2,
  },

  containerPassenger: {
    flexDirection: 'row',
  },

  name: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },

  address: {
    fontSize: fontSizes.sm,
    color: colorsTheme.gray2,
  },

  car: {
    width: 20,
    height: 20,
    margin: 3,
  },
})
