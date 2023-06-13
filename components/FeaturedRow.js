import { View, Text, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import sanityClient from '../sanity'

const FeaturedRow = ({id,title,description}) => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="featured" && _id==$id]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }    
            },
        }[0]`,{id})
        .then(data=>{
            setRestaurants(data?.restaurants)
        });
    }, [id])

    return (
        <View >
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB"/>
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal:15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Restaurant Cards */}

                {restaurants?.map((restaurant)=>(
                    
                    <RestaurantCards
                    key={restaurant._id}
                    id={restaurant._id}
                    imgUrl={restaurant.image}
                    title={restaurant.name}
                    rating={restaurant.rating}
                    genre={restaurant.type?.name}
                    address={restaurant.address}
                    short_description={restaurant.short_description}
                    dishes={[...restaurant.dishes]}
                    long={restaurant.long}
                    lat={restaurant.lat}
                    />
                ))}
                
                    {/* <RestaurantCards
                    // key={restaurants[1]._id}
                    id={restaurants[1]?._id}
                    imgUrl={restaurants[1]?.image}
                    title={restaurants[1]?.name}
                    rating={restaurants[1]?.rating}
                    genre={restaurants[1]?.type?.name}
                    address={restaurants[1]?.address}
                    short_description={restaurants[1]?.short_description}
                    dishes={[...restaurants[1]?.dishes]}
                    long={restaurants[1]?.long}
                    lat={restaurants[1]?.lat}
                    />
                    <RestaurantCards
                    // key={restaurants[0]._id}
                    id={restaurants[1]?._id}
                    imgUrl={restaurants[1]?.image}
                    title={restaurants[1]?.name}
                    rating={restaurants[1]?.rating}
                    genre={restaurants[1]?.type?.name}
                    address={restaurants[1]?.address}
                    short_description={restaurants[1]?.short_description}
                    dishes={[...restaurants[1]?.dishes]}
                    long={restaurants[1]?.long}
                    lat={restaurants[1]?.lat}
                    /> */}

                

                {/* <RestaurantCards
                id={123}
                imgUrl={'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="D-2/609 Sec-F"
                short_description="This is atest description"
                dishes={[]}
                long={20}
                lat={0}
                />

                <RestaurantCards
                id={123}
                imgUrl={'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="D-2/609 Sec-F"
                short_description="This is atest description"
                dishes={[]}
                long={20}
                lat={0}
                /> */}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow