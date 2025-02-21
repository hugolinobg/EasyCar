import { SafeAreaView, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps'
import styles from './styles.js'

import Button from '../../components/Button/Button.jsx'

import icons from '../../constants/icons/icons.js'

const Passenger = (props) => {
  const [myLocation, setMyLocation] = useState({
    latitude: -21.291154,
    longitude: -50.338904,
  })

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: -21.291154,
          longitude: -50.338904,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        }}
      >
        <Marker
          coordinate={{
            latitude: -21.291154,
            longitude: -50.338904,
          }}
          title="Hugolino B. G."
          description="R. Siqueira Campos"
          image={icons.location}
          style={styles.marker}
        />
      </MapView>

      <View style={styles.footer}>
        <View style={styles.footerText}>
          <Text style={styles.textTitle}>Encontre sua carona</Text>
        </View>

        <View style={styles.footerFields}>
          <Text style={styles.text}>Origem: </Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.footerFields}>
          <Text style={styles.text}>Destino: </Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <Button text={'Teste'} theme={'red'} />
    </SafeAreaView>
  )
}

export default Passenger
