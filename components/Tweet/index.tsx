import React from 'react'
import { View } from 'react-native'

import LeftContainer from './LeftContainer'
import MainContainer from './MainContainer'
import { TweetType } from '../../types'

interface TweetProp {
    tweet: TweetType
}

const Tweet = ({ tweet }: TweetProp) => (
    <View>
        <LeftContainer user={tweet.user} />
        <MainContainer tweet={tweet} />
    </View>
)

export default Tweet