import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
       flex: 1,
       marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerNames: {
        flexDirection: 'row',
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold'
    },
    username: {
        marginRight: 5,
        color: 'grey'
        
    },
    createdAt: {
        marginRight: 5,
        color: 'grey'

    },
    chevron: {
        color: 'grey',
        
    },
    content: {
        lineHeight: 18,
        marginTop: 4,
       marginVertical: 5
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        resizeMode: 'cover',
        overflow: 'hidden',
        marginVertical: 10
    }
})
