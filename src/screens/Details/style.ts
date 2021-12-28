import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"
import { getStatusBarHeight } from "react-native-status-bar-height"

export const styles = StyleSheet.create({
    screen: {
        backgroundColor: theme.colors.primary
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumb: {
        width: theme.dimension.width-100,
        height: 400,
        marginTop: getStatusBarHeight() + 35,
    },
    title: {
        color: theme.colors.roxo,
        marginTop: 20,
        fontSize: 18,

    },
    desc: {
        color: theme.colors.secundaryWhite,
        marginTop: 20,
        width: '92%',
        fontSize: 14
    },
    flex : {
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
        justifyContent: "space-around"
    },
    cardInfo: {
        backgroundColor: "#2c2c2c",
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center",
        width: "45%",
        padding: 15
    },
    titleicon : {
        color: theme.colors.secundaryWhite,
        marginTop: 10
    }
})