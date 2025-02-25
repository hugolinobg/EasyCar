import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useEffect, useState } from 'react'
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps'
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  reverseGeocodeAsync,
} from 'expo-location'
import styles from './styles.js'

import Button from '../../components/button/Button.jsx'

import icons from '../../constants/icons/icons.js'

const Passenger = (props) => {
  const [myLocation, setMyLocation] = useState({})
  const [pickupAddress, setPickupAddress] = useState('')
  const [dropoffAddress, setDropoffAddress] = useState('')

  const [title, setTitle] = useState('')

  async function handleLoadScreen() {
    const response = await userRequestRun()

    if (!response.ride_id) {
      const location = await requestPermissionAndGetLocation()

      if (location.latitude) {
        setTitle('Encontre a sua carona agora')
        setMyLocation(location)
        requestAddressName(location.latitude, location.longitude)
      } else {
        Alert.alert('Não foi possível obter sua localização')
      }
    }
  }

  async function userRequestRun() {
    const response = {}

    return response
  }

  async function requestPermissionAndGetLocation() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()

      if (currentPosition.coords) {
        return currentPosition.coords
      } else {
        return {}
      }
    } else {
      return {}
    }
  }

  async function requestAddressName(lat, long) {
    const response = await reverseGeocodeAsync({
      latitude: lat,
      longitude: long,
    })

    if (
      response[0].street &&
      response[0].streetNumber &&
      response[0].district
    ) {
      setPickupAddress(
        `${response[0].street}, ${response[0].streetNumber} - ${response[0].district}`
      )
    }
  }

  useEffect(() => {
    handleLoadScreen()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {myLocation.latitude ? (
        <>
          <MapView
            style={styles.map}
            provider={PROVIDER_DEFAULT}
            initialRegion={{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004,
            }}
          >
            <Marker
              coordinate={{
                latitude: myLocation.latitude,
                longitude: myLocation.longitude,
              }}
              title="Hugolino B. G."
              description="R. Siqueira Campos"
              image={icons.location}
              style={styles.marker}
            />
          </MapView>

          <View style={styles.footer}>
            <View style={styles.footerText}>
              <Text style={styles.textTitle}>{title}</Text>
            </View>

            <View style={styles.footerFields}>getting the location
              <Text style={styles.text}>Origem: </Text>
              <TextInput style={styles.input} value={pickupAddress} />
            </View>

            <View style={styles.footerFields}>
              <Text style={styles.text}>Destino: </Text>
              <TextInput style={styles.input} value={dropoffAddress} />
            </View>
          </View>

          <Button text={'CONFIRMAR'} theme={''} />
        </>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </SafeAreaView>
  )
}

export default Passenger
