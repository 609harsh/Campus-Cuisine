import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect,useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import img from '../delivery.png'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'




const Homescreen = () => {
    const navigation=useNavigation()
    const [featuredCards, setFeaturedCards] = useState()



    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="featured"]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->,        
                },   
            }
        `)
        .then(data=>{
            // console.log(data);
            setFeaturedCards(data)
        });
    }, [])
    
    return (
        <SafeAreaView className="bg-white pt-5  flex-1">
            <View className="flex-row  items-center space-x-2 mx-4 pb-3">
                <Image source={img} className="h-7 w-7 rounded-full bg-gray-300 p-4"/>
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <View className="flex-row items-center space-x-1 justify-start">
                        <Text className="font-bold text-xl " >
                            Current Location
                        </Text>
                        <ChevronDownIcon size={20} color="#00CCBB"  />
                    </View>
                    
                </View>
                <UserIcon size={35} color="#00CCBB"/> 
            </View>


            {/* {Search Icon} */}
            <View className="flex-row items-center justify-center mx-4 pb-2">
                <View className=" flex-1 flex-row space-x-2  bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="#00CCBB"/>
                    <TextInput placeholder="Restaurants and cuisines" keyboardType='default'/>
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB"/>
            </View>


            {/* Body */}
            <ScrollView className="bg-gray-100"  contentContainerStyle={{paddingBottom:100}}>
                {/* Categories */}
                <Categories/>
                {/* Featured Rows */}


                {
                    featuredCards?.map((category)=>(
                        <FeaturedRow 
                            key={category._id}
                            id={category._id} 
                            title={category.name} 
                            description={category.short_description}
                        />
                    )
                    )
                }
            </ScrollView>

            
        </SafeAreaView>
    )
}

export default Homescreen