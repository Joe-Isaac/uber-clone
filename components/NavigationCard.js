import { View, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const NavigationCard = () => {
    const [navFavs, setNavFavs] = useState(true);
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello, Joey!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                styles={toInputBoxStyles}
                enablePoweredByContainer={false}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(
                        setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    })
                    );

                    navigation.navigate("RideOptionsCard")
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en"
                }}
                placeholder='where to?'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                />
            </View>
      </View>
      
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100` }>
        <TouchableOpacity
        onPress={() => navigation.navigate("RideOptionsCars")}
        style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}>
            <Icon name="car" type='font-awesome' color="white" size={16}>
                <Text style={tw`text-white text-center`}>Rides</Text>
            </Icon>

        </TouchableOpacity>

        <TouchableOpacity
        style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name="fast-food-outline" type='ionicon' color="black" size={16}>
                <Text style={tw`text-white text-center`}>Rides</Text>
            </Icon>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigationCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})