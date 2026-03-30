import React from 'react'
import Die from './Die'

export default function App(){
  const [dice, setDice] = React.useState(() => generateAllNewDice())

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

  function generateAllNewDice(){
    const newDice = Array.from({ length: 10}, () => ({
      value: Math.ceil(Math.random() * 6), 
      isHeld: false
    }))
    return newDice
  }
  console.log(dice)
  const diceElements = dice.map((dieObject, index) => (
    <Die 
      key={index} 
      value={dieObject.value} 
      isHeld={dieObject.isHeld} 
      hold={() => hold(index)}
    />
  ))

  function rollDice(){
    if(gameWon){
      setDice(generateAllNewDice())
    }
    else{
      setDice(prevDice => prevDice.map((die) => {
        return die.isHeld ? die : { ...die, value: die.value = Math.ceil(Math.random() * 6)}
      }))
    }
  }

  function hold(index) {
    setDice(prevDice => prevDice.map((die, i) => {
        return i === index ? { ...die, isHeld: !die.isHeld } : die
    }))
  }

  return(
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}