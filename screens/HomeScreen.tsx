import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import Feed from '../components/Feed'

import NewTweetButtons from '../components/NewTweetButton'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});
