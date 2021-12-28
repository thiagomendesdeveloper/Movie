import { Dimensions } from "react-native"

export const theme = {
    colors: {
        primary: '#0d1117',
        white: '#fff',
        secundaryWhite: '#e1e1e1',
        roxo: "#aa89e5"
    },

    dimension: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
}