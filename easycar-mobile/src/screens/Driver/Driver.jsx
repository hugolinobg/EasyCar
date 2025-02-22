import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from './styles.js'

import icons from '../../constants/icons/icons.js'

import { json_rides } from '../../constants/data/data.js'

const Driver = (props) => {
  function handleDriver(id) {
    props.navigation.navigate('RaceDetails')
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={json_rides}
        keyExtractor={(item) => item.ride_id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleDriver(item.ride_id)}
            >
              <View style={styles.containerPassenger}>
                <Image style={styles.car} source={icons.car} />
                <Text style={styles.name}>{item.passenger_name}</Text>
              </View>

              <Text style={styles.address}>Origem: {item.pickup_address}</Text>
              <Text style={styles.address}>
                Destino: {item.dropoff_address}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Driver
