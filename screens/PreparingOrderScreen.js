import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {

    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Delivery")
        },4000)
    },[])

    return (
        <SafeAreaView className="bg-[#00ccbb] flex-1 items-center justify-center">
            <Animatable.Image
                source={require("../f17d1abee9a9ee985cbc35b0927c4f17.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-72 w-72 rounded-full bg-[#00ccbb]-500"
            />
            <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            className="text-lg my-10 text-white font-bold ">    
                Waiting for Restaurant to confirm Order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white"/>
        </SafeAreaView>
    )
}

export default PreparingOrderScreen