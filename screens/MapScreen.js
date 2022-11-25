import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigationCard from '../components/NavigationCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {
  const stack = createStackNavigator();
  return (
    <View>

      <View style={tw`h-1/2`}>
          <Map/>
      </View>
      <View style={tw`h-1/2`}>
        <stack.Navigator>
          <stack.Screen
          name="NavigationCard"
          component={NavigationCard}
          options={{
            headerShown: false,
          }}
          />
          <stack.Screen
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}
          />
        </stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen