import React from 'react'
import { View, Image } from 'react-native'
import { UserType } from '../../../types'
import ProfilePicture from '../../ProfilePicture'
interface LeftContainerProp {
    user: UserType
}

const LeftContainer = ({ user }: LeftContainerProp) => (
    <View>
        <ProfilePicture image={user.image} size={75}/>
    </View>
)
 
export default LeftContainer