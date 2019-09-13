import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

//import * as Font from 'expo-font'



export default function App() {
    // useEffect(() => {
    //   Font.loadAsync({
    //     'Anudi': require('/Users/macbook/github/react-native-game/assets/fonts/Anudi.ttf'),
    //     'JosefineSans': require('/Users/macbook/github/react-native-game/assets/fonts/JosefineSans.ttf')
    //   });
    // })
    const [userNumber, setUserNumber] = useState()
    const [attempts, setAttempts] = useState(0)


    const resetGame = () => {
      setAttempts(0)
      setUserNumber(null)
    }
    const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber)
    }

    const gameOverHandler = (numOfAttempt) => {
      setAttempts(numOfAttempt)
    }
    let content = <StartGameScreen onStartGame = {startGameHandler}/>

    if(userNumber && attempts <= 0){
      content = <GameScreen userChoice = {userNumber} onGameOver = {gameOverHandler}/>
    } else if(attempts > 0){
      content = <GameOverScreen attempts = {attempts} userNum = {userNumber}onRestart = {resetGame}/>
    }
    return (
      <View style={styles.screen}>
        <Header title = "guess a number"/>
        {content}
      </View> 
    );
  
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
