import { StyleSheet } from 'react-native'
import Color from '../../constants/Colors'

const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.light.tint,
        position: 'absolute',
        right: 25,
        bottom: 30,
        borderRadius: 50,
        padding: 22,
    }
})

export default styles