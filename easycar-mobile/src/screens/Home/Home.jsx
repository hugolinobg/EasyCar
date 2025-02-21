import {
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import styles from './styles.js'

import icons from '../../constants/icons/icons.js'

const Home = (props) => {
  function handlePassenger() {
    props.navigation.navigate('Passenger')
  }

  function handleDriver() {
    props.navigation.navigate('Driver')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={icons.bg}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <Image source={icons.logo} style={styles.imageLogo} />

        <TouchableOpacity style={styles.btn} onPress={handlePassenger}>
          <Image source={icons.passenger} style={styles.imagePassenger} />
          <Text style={styles.title}>Passageiro</Text>
          <Text style={styles.text}>Encontre uma carona para você</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={handleDriver}>
          <Image source={icons.driver} style={styles.imageDriver} />
          <Text style={styles.title}>Motorista</Text>
          <Text style={styles.text}>Ofereça carona em seu carro</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Home
