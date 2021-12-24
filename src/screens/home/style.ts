import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import {getStatusBarHeight} from 'react-native-status-bar-height';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
    },

    title: {
        marginTop: getStatusBarHeight() + 35,
        color: theme.colors.white,
        textAlign:"center",
        fontSize:30,
        marginBottom: 30
    },
    content: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    thumb: {
        maxWidth:150,
        height: 250
    },
    card: {
        width:150,
        alignItems: 'center',
        margin: 'auto',
        marginBottom: 22 
    },
    name: {
        color: theme.colors.white,
        marginTop: 5,
        fontSize: 15
    },
    ano: {
        color: theme.colors.secundaryWhite,
        marginTop: 5,

    }
});
