import React from 'react'
import { View } from 'react-native'

import LeftContainer from './LeftContainer'
import MainContainer from './MainContainer'
import { TweetType } from '../../types'
import styles from './styles'

interface TweetProp {
    tweet: TweetType
}

const Tweet = ({ tweet }: TweetProp) => (
    <View style={styles.container}>
        <LeftContainer user={tweet.user} />
        <MainContainer tweet={tweet} />
    </View>
)

export default Tweet