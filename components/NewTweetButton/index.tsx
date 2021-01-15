import React from 'react'

import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const NewTweetButtons = () => {
    
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('NewTweet')
    }
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={onPress}>
            <MaterialCommunityIcons name="feather" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default NewTweetButtons