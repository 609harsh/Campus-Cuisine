import { View, Text, ScrollView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import CategoryCard from './CategoryCard'
import img from '../delivery.png'
import sanityClient from '../sanity'
import { urlFor } from '../sanity'



const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        sanityClient.fetch(`
        *[_type=="category"]
        `).then(data=>{
            
            setCategories(data)
        })
    },[])
    return (
        <ScrollView contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop:10,
        }} horizontal showsHorizontalScrollIndicator={false}>
            
            {
                categories?.map((category)=>{
                    // console.log(category);
                    return <CategoryCard 
                    key={category._id}
                    imgUri={urlFor(category.image).url()} 
                    title={category.name}/>
                })
            }


            {/* <CategoryCard imgUri={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"} title="Testing 1"/>
            <CategoryCard imgUri={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"} title="Testing 2"/>
            <CategoryCard imgUri={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"} title="Testing 3"/>
            <CategoryCard imgUri={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"} title="Testing 1"/>
            <CategoryCard imgUri={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"} title="Testing 2"/>
            <CategoryCard imgUri={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"} title="Testing 3"/> */}
            {/* <Text>Categories</Text> */}
        </ScrollView>
    )
}

export default Categories