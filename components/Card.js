import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'

const Card = (props) => {
    return (
        <View style = {{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,
        backgroundColor: 'white',
        elevation: 8,
        shadowOffset: {width: 0, height: 4},
        padding: 15,
        borderRadius: 8
    }
})

export default Card