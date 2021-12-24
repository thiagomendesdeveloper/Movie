import { View, Text, Image, FlatList, SafeAreaView} from "react-native"
import { styles } from './screens/home/style'
import React, { useState, useEffect } from 'react';

type filmes = {
    title?: string,
    ano?: string,
    id: number
}

const data = [
    {   
        id: 1,
        title: 'Avengers',
        ano: '1997'
    },
    {
        id: 2,
        title: 'Home Aranha',
        ano: '2002'
    },
    {
        id: 3,
        title: 'Homem de Ferro',
        ano: '2005'
    }
]

export default function Home(){

    useEffect( ()=> {
        
    })
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Filmes</Text>
            <View style={styles.content}>
                {data.map(function(e){
                    <View key={e.id} style={styles.card}>
                        <Image style={styles.thumb} source={require('../assets/avengers.jpg')} />
                        <Text style={styles.name}>{e.title}</Text>
                        <Text style={styles.ano}>{e.ano}</Text>
                    </View>
                })}
            </View>
        </View>
    )
}