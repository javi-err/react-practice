import React, { Component } from 'react'
import Die from './Die'
import RollDice from './RollDice'
import './Dice.css'

export class Dice extends Component {
    render() {
        return (
            <div className="Dice">
                <RollDice />
            </div>
        )
    }
}

export default Dice
