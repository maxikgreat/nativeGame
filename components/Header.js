import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constants/colors'



const Header = (props) => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '17%',
        paddingTop: 30,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 28,
        textTransform: 'uppercase'
    }
})
export default Header