import React from 'react'
import { View, Text, Image } from 'react-native'
import { TweetType } from '../../../types'


interface  MainContainerProp {
    tweet: TweetType
}

const  MainContainer = ({ tweet }:  MainContainerProp) => (
    <View>
        <View>
            <Text>{tweet.user.name}</Text>
            <Text>@{tweet.user.username}</Text>
            <Text>{tweet.createdAt}</Text>
        </View>
        <View>
            <Text>{tweet.content}</Text>
            {!!tweet.image && <Image source={{ uri: tweet.image }}/>}
        </View>
        <Text>Hello</Text>
    </View>
)

export default  MainContainer