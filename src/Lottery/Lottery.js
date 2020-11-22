import React, { Component } from 'react'
import LotteryBall from './LotteryBall'
import './Lottery.css'

export class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxNum: 40,
        numBalls: 5,
    }
    constructor(props){
        super(props)

        this.state = {
            numbers: Array.from({length: this.props.numBalls}),
        }
    }

    numberGenerator() {

        this.setState(currState => ({
            numbers: currState.numbers.map(n =>
                Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }))
        // get numbers between 1 - maxNum

  

        //
    }
    render() {
        return (
            <section className="title">
                {this.props.title}
            <div className="Lottery">
                {this.state.numbers.map(n => <LotteryBall num={n} />)}
            </div>

            <button onClick={()=> {this.numberGenerator()}}>Generate</button>
            </section>
        )
    }
}

export default Lottery
