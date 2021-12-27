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

    }
})