import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js'

import Button from '../../components/Button/Button.jsx'

import { json_rides } from '../../constants/data/data.js'

const Driver = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={json_rides}
        keyExtractor={(item) => item.ride_id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.btn}>
              <Image />
              <Text style={styles.name}>{item.passenger_name}</Text>
              <Text style={styles.address}>Origem: {item.pickup_address}</Text>

              <Text style={styles.address}>Destino: {item.pickup_date}</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Button text={'Teste'} />
    </SafeAreaView>
  )
}

export default Driver
