import { Text, Image, View, ScrollView } from "react-native"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {styles} from './style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type RootStackParamList = {
    Profile: { itemId: string, thumb: string, data: string, name: string, description: string, popularity: string  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;


export default function Detail( { route } : Props ){
    
    const { itemId, name , thumb, description, data, popularity} = route.params;

    return(
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Image style={styles.thumb} resizeMode="contain" source={ {uri: thumb } } />
                <Text style={styles.title}>{name}</Text>
                <View style={styles.flex}>
                    <View style={styles.cardInfo}>
                        <FontAwesome5 name={'share-alt'} size={30} color="white"/>
                        <Text style={styles.titleicon}>{popularity}</Text>
                    </View>
                    <View style={styles.cardInfo}>
                        <FontAwesome5 name={'clock'} size={30} color="white"/>
                        <Text style={styles.titleicon}>{data}</Text>
                    </View>
                </View>
                <Text style={styles.desc}>{description}</Text>
            </View>
        </ScrollView>
    )
}