import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import {useDispatch,useSelector} from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice'



const DishRow = ({id,name,description,price,image}) => {
    
    const [isPressed,setIsPressed]=useState(false)
    const dispatch=useDispatch();
    
    const items=useSelector((state)=>selectBasketItemsWithId(state,id));
    
    const addItemToBasket=()=>{
        dispatch(addToBasket({id,name,description,price,image}))
    }

    const removeItemFromBasket=()=>{
        if(!items.length>0)return
        dispatch(removeFromBasket({id}));
    }

    // console.log(items);

    return (
        <>
        
        <TouchableOpacity 
            onPress={()=>setIsPressed(!isPressed)}
            className={`bg-white border p-4 border-gray-200 flex-row items-center ${isPressed && "border-b-0"}`}>
            <View className="flex-1 pr-2">
                <Text className="text-xl mb-1">{name}</Text>
                <Text className="text-md text-gray-500">{description} </Text>
                <Text className="text-gray-400 mt-2">{"₹"+price}</Text>
            </View>
            <View>
                <Image style={{borderWidth:1,borderColor:"#F3F3F4"}} source={{uri:urlFor(image).url()}} className="h-20 w-20 p-4 bg-gray-300"/>
            </View>
        </TouchableOpacity>
        {
            isPressed && (
                <View className="bg-white px-4 border-collapse ">
                    <View className="flex-row items-center pb-2 ">
                        <TouchableOpacity disabled={!items.length>0} onPress={removeItemFromBasket}>
                            <MinusCircleIcon size={40} color={!items.length>0?"gray":"#00ccbb"}/>
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon size={40} color="#00ccbb" />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        </>
    )
}

export default DishRow
