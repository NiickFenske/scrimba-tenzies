import React from 'react'
import Die from './Die'
    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     * 
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */

export default function App(){
  const [dice, setDice] = React.useState(generateAllNewDice())

  function generateAllNewDice(){
    const newDice = Array.from({ length: 10}, () => Math.ceil(Math.random() * 6))
    return newDice
  }

  const diceElements = dice.map(num => (<Die value={num} />))

  return(
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  )
}