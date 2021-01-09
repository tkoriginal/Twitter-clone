export interface RootStackParamList {
  Root: undefined
  NotFound: undefined
};

export interface BottomTabParamList {
  Home: undefined
  Search: undefined
  Notifications: undefined
  Messages: undefined
}

export interface HomeNavigatorParamList {
  HomeScreen: undefined
}

export interface TabTwoParamList {
  TabTwoScreen: undefined
}

export interface UserType {
  name: string
  id: string
  username: string
  image?: string
}
export interface TweetType {
  id: string
  createdAt: string
  content: string
  image?: string
  numberOfComments?: number
  numberOfRetweets?: number
  numberOfLikes?: number
  user: UserType
}