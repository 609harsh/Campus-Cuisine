import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {

    const items=useSelector(selectBasketItems)
    const navigation=useNavigation();
    const basketTotal=useSelector(selectBasketTotal);

    if(items.length===0)return null;

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity 
                onPress={()=>navigation.navigate('Basket')}
                className="bg-[#00ccbb] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
                <Text className="text-white text-lg font-extrabold py-1 px-2 bg-[#01A296]" >
                    {items.length}
                </Text>
                <Text className="text-white text-lg font-extrabold py-1 px-2  text-center flex-1">
                    View Basket
                </Text>
                <Text className="text-white text-lg font-extrabold py-1 px-2 ">
                    {"₹"+basketTotal.toFixed(2)}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon
