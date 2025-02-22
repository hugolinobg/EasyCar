import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home/Home.jsx'
import Passenger from '../screens/passenger/Passenger.jsx'
import Driver from '../screens/driver/Driver.jsx'
import RaceDetails from '../screens/raceDetails/RaceDetails.jsx'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Passenger"
          component={Passenger}
          options={{
            headerShownVisible: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="Driver"
          component={Driver}
          options={{
            headerTitle: 'Viagens Disponíveis',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="RaceDetails"
          component={RaceDetails}
          options={{
            headerShownVisible: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
