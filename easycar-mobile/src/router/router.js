import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home/Home.jsx'
import Passenger from '../screens/Passenger/Passenger.jsx'
import Driver from '../screens/Driver/Driver.jsx'

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
