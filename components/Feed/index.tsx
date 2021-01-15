import React from 'react'
import { View, FlatList } from 'react-native'

import tweets from '../../data/tweets'
import Tweet from '../Tweet'
import styles from './styles'

const Feed = () => {
  return (
      <View style={styles.container}>
          <FlatList
            data={tweets}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Tweet tweet={item} />}
          />
      </View>
  )
}

export default Feed
