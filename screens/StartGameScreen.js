import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {

    const [readyValue, ready] = useState(false)
    const [validValue, changeValue] = useState('')
    const [number, setNumber] = useState()

    const changeTextHandler = (value) => {
        changeValue(value.replace(/[^0-9]/g, ''))
    }

    const resetHandler = () => {
        changeValue("")
        ready(false)
    }

    const confirmHandler = () => {
        const choosenNumber = parseInt(validValue)
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [{text: 'Okey', style: 'destructive', onPress: resetHandler}])
            return
        }
        setNumber(choosenNumber)
        ready(true)
        Keyboard.dismiss()
        changeValue('')

    }

    let confirmedOutput
    if (readyValue){
        confirmedOutput = 
            <Card style = {styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{number}</NumberContainer>
                <Button title = 'START GAME' onPress = {() => {props.onStartGame(number)}}/>
            </Card>
    }

    return(
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
            <View style = {styles.screen}>
                <Text style = {styles.title}>start new game</Text>
                    <Card style = {styles.inputContainer}>
                        <Text style = {styles.text}>SELECT A</Text>
                        <Input 
                            style = {styles.input}
                            blurOnSubmit 
                            autoCapitalize = "none" 
                            autoCorrect = {false}
                            keyboardType = 'number-pad'
                            maxLength = {2}
                            onChangeText = {changeTextHandler}
                            value = {validValue}
                        />
                        <View style = {styles.buttonContainer}>
                            <View style = {styles.button}>
                                <Button title = "Reset" onPress = {resetHandler} color = {Colors.secondary}/>
                            </View>
                            <View style = {styles.button}>
                                <Button tton title = "Confirm" onPress = {confirmHandler} color = {Colors.primary}/>
                            </View>
                        </View>
                    </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        textTransform: 'uppercase'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        width: '80%',
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGameScreen