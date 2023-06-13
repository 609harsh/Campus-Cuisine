import { View, Text,TouchableOpacity,Image,ScrollView } from 'react-native'
import React ,{useState,useMemo}from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';
import img from '../delivery.png'
import { urlFor } from '../sanity';
import PreparingOrderScreen from './PreparingOrderScreen';




const BasketScreen = () => {

    const navigation=useNavigation();
    const restaurant=useSelector(selectRestaurant);
    const items=useSelector(selectBasketItems);
    const [groupedItemsInBasket,setGroupedItemsInBasket]=useState([]);
    const basketTotal=useSelector(selectBasketTotal);

    const dispatch=useDispatch() 

    useMemo(()=>{
        const groupedItems=items.reduce((res,item)=>{
            (res[item.id]=res[item.id]||[]).push(item);
            return res;
        },{})

        setGroupedItemsInBasket(groupedItems);
    },[items])

    // console.log(groupedItemsInBasket)

    return (
        <SafeAreaView className="bg-gray-100 flex-1">
            {/* <View className=""> */}
                <View className="flex-row p-5 border-b border-[#00ccbb] bg-white shadow-xs items-center">
                    <View className="flex-1">
                        <Text className="text-3xl font-bold ">Basket</Text>
                        <Text className="text-gray-500 text-md">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100">
                        <XCircleIcon color="#00ccbb" size={40}/>
                    </TouchableOpacity>
                </View>
                <View className="flex-row space-x-2 items-center px-4 py-3 bg-white my-5">
                    <Image source={img} className="h-7 w-7 rounded-full bg-gray-300 p-4"/>
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text color="#00ccbb">Change</Text>
                    </TouchableOpacity>
                </View>
                
            
                <ScrollView className="divide-y divide-gray-200"  >
                    
                    {
                        Object.entries(groupedItemsInBasket).map(([key,item])=>{
                            return (<View key={key} className="flex-row space-x-2 items-center bg-white px-4 py-3">
                                <Text>{item.length+" x"}</Text>
                                <Image source={{uri:urlFor(item[0]?.image).url()}} className="h-12 w-12 rounded-full"/>
                                <Text className="flex-1">{item[0].name}</Text>
                                <Text className="text-gray-500">{"₹"}{item.length*item[0]?.price}</Text>

                                <TouchableOpacity onPress={()=>dispatch(removeFromBasket({id:key}))}>
                                    <Text  className="text-xs text-[#00ccbb]">Remove</Text>
                                </TouchableOpacity>
                            </View>
                        )})
                    }
                </ScrollView>
        
                <View className="bg-white p-3 space-y-4 mt-5">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-500">Subtotal</Text>
                        <Text className="text-gray-500">{"₹"}{basketTotal.toFixed(2)}</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-500">Delivery Fee</Text>
                        <Text className="text-gray-500">{"₹"}{5.99}</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-900 font-bold ">Order Total</Text>
                        <Text className="text-gray-900 font-extrabold">{"₹"}{(basketTotal+5.99).toFixed(2)}</Text>
                    </View>
                    
                    <TouchableOpacity onPress={()=>navigation.navigate("PreparingOrder")} className="bg-[#00ccbb] w-full p-4 rounded-md">
                        <Text className="text-white text-center text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            {/* </View> */}
        </SafeAreaView>
    )
}

export default BasketScreen