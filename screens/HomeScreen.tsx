import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import tweets from '../data/tweets'
import Tweet from '../components/Tweet'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Tweet tweet={tweets[0]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
