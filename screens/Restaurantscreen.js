import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React,{useEffect, useLayoutEffect}from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { StarIcon,MapPinIcon,ArrowLeftIcon } from 'react-native-heroicons/solid'
import { ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import { SafeAreaView } from 'react-native-safe-area-context';
import BasketIcon from '../components/BasketIcon';
import { useDispatch,  } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';


const Restaurantscreen = () => {
    const navigation=useNavigation();
    const dispatch=useDispatch();
    
    

    const {
        params:{
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
        }
    }=useRoute();

    useEffect(()=>{
        dispatch(
            setRestaurant({
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
        }))
    },[dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    }, [])

    return (
        <SafeAreaView>
            <BasketIcon/>
            <ScrollView>
                <View className="relative">
                    <Image source={{uri:urlFor(imgUrl).url()}} className="w-full h-56 bg-gray-300 "/>
                    <TouchableOpacity  onPress={navigation.goBack} className="absolute left-5 top-5 rounded-full bg-white p-2">
                        <ArrowLeftIcon size={20} color="#00ccbb"/>
                    </TouchableOpacity>
                </View>
                
                <View className="px-4 pt-4 bg-white">
                    <Text className="font-bold text-3xl pt-2">{title}</Text>
                    <View className="flex-row space-x-1 my-1">
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
                    <Text className="text-gray-500 mt-1 pb-2">
                        {short_description}
                    </Text>
                </View>


                <TouchableOpacity className="flex-row p-4 border-y border-gray-100 space-x-2 bg-white">
                    <QuestionMarkCircleIcon size={20} opacity={0.6} color="gray" />
                    <Text className="font-bold text-md flex-1 pl-2">
                        Have a food allergy? 
                    </Text>
                    <ChevronRightIcon color="#00ccbb"/>
                </TouchableOpacity>

                <View className="pb-28">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

                    {/* DishRows */}
                    {
                        dishes.map((dish)=>{
                            return <DishRow
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.short_description}
                                price={dish.price}
                                image={dish.image}
                            />
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Restaurantscreen