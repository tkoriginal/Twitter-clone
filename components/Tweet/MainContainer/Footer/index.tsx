import React from 'react'
import { View, Text, Image } from 'react-native'
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons'

import { TweetType } from '../../../../types'
import styles from './styles'

interface FooterProp {
  tweet: TweetType
}

const Footer = ({ tweet }: FooterProp) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
        <Feather name={"message-circle"} size={20} color="grey" />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
    </View>
    <View style={styles.iconContainer}>
        <EvilIcons name="retweet" size={27} color="grey" />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
    </View>
    <View style={styles.iconContainer}>
        <AntDesign name={"hearto"} size={18} color="grey" />
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
    </View>
    <View style={styles.iconContainer}>
        <EvilIcons name={"share-google"} size={22} color="grey" />
    </View>
  </View>
)

export default Footer
