import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'
import colors from '../constants/colors'

const GameOverScreen = (props) => {
    return (
            <View style = {styles.screen}>
                <Card style = {styles.contentBox}>
                    <Text>That's all!</Text>
                    <Text>Computer guessed your number in </Text>
                    <NumberContainer>{props.attempts}</NumberContainer>
                    <Text>attemps</Text>
                    <Text>Your number was</Text>
                    <NumberContainer>{props.userNum}</NumberContainer>
                    <View style = {styles.buttonContainer}>
                        <Button title = "BACK TO START" onPress = {props.onRestart} color = {colors.primary}/>
                    </View>
                </Card>
            </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '20%'
    },
    contentBox:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '70%',
        margin: 10,
        paddingTop: 10
        
    }
})

export default GameOverScreen