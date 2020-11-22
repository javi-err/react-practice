import React, { Component } from 'react'
import './Lottery.css'

export class LotteryBall extends Component {
    render() {
        return (
            <div className="LotteryBall">
                {this.props.num} 
            </div>
        )
    }
}

export default LotteryBall
