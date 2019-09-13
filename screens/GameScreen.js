import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Button, Text, Alert} from 'react-native'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import {randomNumber} from '../logic/executes'

const GameScreen = (props) => {

    const [currentGuess, setGuess] = useState(randomNumber(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice, onGameOver} = props

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess, onGameOver, userChoice])

    const nextGuessHandler = (direction) => {
        console.log(rounds)
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' &&  currentGuess > props.userChoice)){
            Alert.alert('Don\'t lie!', 'You know that this is wrong...',[{text: 'Sorry!', style: 'cancel'}])
            return
        }
        if (direction === 'lower'){
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = randomNumber(currentLow.current, currentHigh.current, currentGuess)
        setGuess(nextNumber)
        setRounds(currRounds => currRounds + 1)
    }

    return(
        
        <View style = {styles.screen}> 
            <Text>Computer's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style = {styles.buttonContainer}>
                <Button title = 'LOWER' onPress = {nextGuessHandler.bind(this, 'lower')}/>
                <Button title = 'HIGHER' onPress = {nextGuessHandler.bind(this, 'higher')}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '80%'
    }
})

export default GameScreen