import { View, Text, Image, FlatList } from "react-native"
import { styles } from './screens/home/style'
import React, { useState, useEffect } from 'react';

interface Movies {
    id: string,
    title?: string,
    poster_path?: string,
    release_date?: string
}

const api_key = "e61c352783109ca0da4d5730b18b36a5"
const api_base = "https://api.themoviedb.org/3"
const base_img = "https://www.themoviedb.org/t/p/w220_and_h330_face"

export default function Home(){

    const [ Movies , setMovies] = useState<Movies[]>()
    
    useEffect (() => {
        const fetchbase = async() => {
            const req = await fetch(`${api_base}/discover/movie?api_key=${api_key}&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            const json = await req.json()
            setMovies( json.results )
        }
        fetchbase()
    },[])
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Filmes</Text>
            <FlatList
                data={Movies}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({item}) => 
                <View style={styles.content}>
                    <View key={item.id} style={styles.card}>
                        <Image style={styles.thumb} resizeMode="cover" source={ {uri: base_img+item.poster_path } } />
                        <Text style={styles.name}>{item.title}</Text>
                        <Text style={styles.ano}>{item.release_date}</Text>
                    </View>
                </View>
                }
            />
            {/* <ScrollView>
                <View style={styles.content}>
                    {Movies?.map( (e) => {
                    return <View key={e.id} style={styles.card}>
                                {console.log(base_img+e.poster_path)}
                                <Image style={styles.thumb} resizeMode="cover" source={ {uri: base_img+e.poster_path } } />
                                <Text style={styles.name}>{e.title}</Text>
                                <Text style={styles.ano}>{e.release_date}</Text>
                            </View>
                    })}
                </View>
            </ScrollView> */}
        </View>
    )
}