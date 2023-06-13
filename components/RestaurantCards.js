import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { StarIcon,MapPinIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'


const RestaurantCards = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    const navigation=useNavigation();
    return (
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('Restaurant',{
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_description,
                dishes,
                long,
                lat,
            });
        }}
        className="bg-white shadow mr-3 rounded">
            <Image source={{uri:urlFor(imgUrl).url()}}  className="h-36 w-64 rounded-sm"/>
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22}/>
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text> {"\u00b7"} {genre}
                    </Text>
                </View>
                <View className="flex-row space-x-1 items-center ">
                    <MapPinIcon color="grey" opacity={0.4} size={22}/>
                    <Text className="text-grey-500 text-xs">Nearby {"\u00b7"} {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCards