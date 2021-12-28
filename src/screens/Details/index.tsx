import { Text, Image, View, ScrollView } from "react-native"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {styles} from './style'

type RootStackParamList = {
    Profile: { itemId: string, thumb: string, data: string, name: string, description: string,  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;


export default function Detail( { route } : Props ){
    
    const { itemId, name , thumb, description, data} = route.params;

    return(
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Image style={styles.thumb} resizeMode="contain" source={ {uri: thumb } } />
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.desc}>{description}</Text>
            </View>
        </ScrollView>
    )
}