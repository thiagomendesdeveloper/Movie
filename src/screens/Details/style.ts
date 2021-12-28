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
        color: theme.colors.white,
        marginTop: 20,
        fontSize: 16
    },
    desc: {
        color: theme.colors.secundaryWhite,
        marginTop: 20,
        width: '90%',
        fontSize: 14
    }
})