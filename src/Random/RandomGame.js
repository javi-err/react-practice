import React, { Component } from 'react';
import Button from './Button';
import './RandomGame.css';

export class RandomGame extends Component {
    constructor(props){
        super(props)

        this.state = {
            number : Math.floor(Math.random() * 10) + 1,
            currentGuess: 1,
            winCon : false
        }
    }

    numberGenerator = () => {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({
            currentGuess: rand
        })
    }


    
    winCondition = () => {
        if(this.state.currentGuess === this.state.number) {
            return (
                <h1 className="win-text">You won!</h1>

            )
        }
        else return (
            <Button numberGenerator={this.numberGenerator}/>
        )
    }
    
    

    render() {
        return (
            <div className="RandomGame">
                <h1>Number is {this.state.currentGuess}</h1>
               {this.winCondition()}
            </div>
        )
    }
}

export default RandomGame
