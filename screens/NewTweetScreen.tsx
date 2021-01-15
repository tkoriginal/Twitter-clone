import * as React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Colors from '../constants/Colors'
import ProfilePicture from '../components/ProfilePicture'

export default function NewTweetScreen() {
  const [tweet, setTweet] = React.useState('Hello')
  const [imageUrl, setimageUrl] = React.useState('')

  const navigation = useNavigation()
  const onSubmit = () => {
    console.log(tweet, imageUrl)
  }
  const onCancel = () => {
    navigation.navigate('Root')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancel} activeOpacity={0.9}>
          <AntDesign name="close" size={30} color={Colors.light.tint} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image="https://pbs.twimg.com/profile_images/1258925885559918600/LobOsMaW_400x400.jpg" />
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.tweetInput}
            placeholder="What's happening?"
            numberOfLines={3}
            multiline={true}
            value={tweet}
            onChangeText={value => setTweet(value)}
          />
          <TextInput
            style={styles.imageInput}
            onChangeText={value => setimageUrl(value)}
            placeholder="Image Url (Options)"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15
  },
  inputsContainer: {
    marginLeft: 15
  },
  imageInput: {
    fontSize: 18
    
  },
  tweetInput: {
    height: 200,
    maxHeight: 300,
    fontSize: 18
  }
})
