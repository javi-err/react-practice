import React, { Component } from 'react'
import CoinFlip from './CoinFlip'

export class Coin extends Component {
    render() {
        return (
            <div>
                <h1>Lets Flip a Coin!</h1>
                <CoinFlip />
            </div>
        )
    }
}

export default Coin
