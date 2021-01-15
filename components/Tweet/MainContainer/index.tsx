import React from 'react'
import { View, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { TweetType } from '../../../types'
import styles from './styles'
import Footer from './Footer'
interface MainContainerProp {
  tweet: TweetType
}

const MainContainer = ({ tweet }: MainContainerProp) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.headerNames}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>
          {formatDistanceToNow(parseISO(tweet.createdAt), {
            includeSeconds: true
          })}
        </Text>
      </View>
      <Ionicons name="chevron-down" style={styles.chevron} size={16} />
    </View>
    <View>
      <Text style={styles.content}>{tweet.content}</Text>
      {!!tweet.image && (
        <Image style={styles.image} source={{ uri: tweet.image }} />
      )}
    </View>
    <Footer tweet={tweet} />
  </View>
)

export default MainContainer
