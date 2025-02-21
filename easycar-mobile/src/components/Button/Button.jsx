import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './styles'

const Button = (props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={props.theme == 'red' ? styles.btnRed : styles.btnYellow}
      >
        <Text style={props.theme == 'red' ? styles.textLight : styles.textDark}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Button
