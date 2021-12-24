import { View, Text, Image, FlatList, SafeAreaView} from "react-native"
import { styles } from './screens/home/style'
import React, { useState, useEffect } from 'react';

type filmes = {
    title?: string,
    ano?: string,
    id: number
}

interface Movies {
    id: number,
    title: string,
    backdrop_path: string
}

const api_key = "e61c352783109ca0da4d5730b18b36a5"
const api_base = "https://api.themoviedb.org/3"
const base_img = "https://www.themoviedb.org/t/p/w220_and_h330_face"

export default function Home(){

    const [ Movies , setMovies] = useState<Movies>()
    
    useEffect (() => {
        const fetchbase = async() => {
            const req = await fetch(`${api_base}/discover/movie?api_key=${api_key}&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            const json = await req.json()
            setMovies( json )
        }
        fetchbase()
    },[])

    // console.log(Movies)
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Filmes</Text>
             <View style={styles.content}>
                {console.log(Movies?.title)}
                 {/* {Movies?.map( (e) => {
                    <View key={e.id} style={styles.card}>
                        <Image style={styles.thumb} source={require('../assets/avengers.jpg')} />
                        <Text style={styles.name}>{e.title}</Text>
                        <Text style={styles.ano}>{e.backdrop_path}</Text>
                    </View> */}
                {/* })}   */}
                <Text style={styles.name}>{Movies?.title}</Text>
            </View>
        </View>
    )
}