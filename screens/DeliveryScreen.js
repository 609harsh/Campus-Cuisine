import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-svg';
import imgURL from '../delivery.png'
const DeliveryScreen = () => {

    const navigation=useNavigation();
    const restaurant=useSelector(selectRestaurant);


    return (
        <View className="bg-[#00ccbb] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                        <XCircleIcon color="white" size={30}/>
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white rounded-md shadow-md mx-5 my-2 p-6 z-50">
                    <View className="flex-row items-center">
                        <View className="flex-1">
                            <Text className="text-lg text-gray-500">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{uri:"https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952zuwueh0tm1zhmxcydegrybcvtevdijmoltgv0urk&rid=giphy.gif&ct=s"}}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar color="#00ccbb" size={30} indeterminate={true}/>

                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.name} is being prepared
                    </Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude:restaurant.lat,
                    longitude:restaurant.long,
                    latitudeDelta:0.005,
                    longitudeDelta:0.005

                }}
                className="flex-1 -mt-10 z-0"
                mapType='mutedStandard'
                
            >
                <Marker
                    coordinate={{
                        latitude:restaurant.lat,
                        longitude:restaurant.long
                    }}
                    title={restaurant.title}
                    description={restaurant.short_decription}
                    identifier="origin"
                    pinColor="#000"
                />


            </MapView>

            <SafeAreaView className="flex-row items-center bg-white space-x-5 h-24 px-4 justify-between">
                <Image source={imgURL} className="h-10 w-10 bg-gray-300 ml-5  rounded-full"/>
                <View className="flex-1">
                    <Text className='text-lg font-bold'>Harsh</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-[#00ccbb] text-lg font-bold mr-5">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen