import React, { Component } from 'react'
import './Coin.css'

export class CoinFlip extends Component {
    static defaultProps = {
        image: ['https://faculty.math.illinois.edu/~hildebr/fakerandomness/resources/heads.png', 'https://faculty.math.illinois.edu/~hildebr/fakerandomness/resources/tails.png']
    }
    constructor(){
        super();

        this.state = {
            flipCounter: 0,
            headsCount: 0,
            tailsCount : 0,
            currImage: ''
        }
    }

    flip(){
        let idx = Math.floor(Math.random() * this.props.image.length);

        //     this.setState(currState =>({
        //         currImage: <img src={this.props.image[idx]} alt=""></img>,
        //         flipCounter: currState.flipCounter + 1
        //     }))

        // idx === 0 ? 
        //     this.setState(currState =>({
        //     headsCount: currState.headsCount + 1,
        // })) :
        //     this.setState(currState =>({
        //     tailsCount: currState.tailsCount + 1,
        //     }))

        this.setState(currState => { 
            let newState = {
                ...currState,
                currImage: <img src={this.props.image[idx]} alt=""></img>,
                flipCounter: currState.flipCounter + 1
            };

            idx === 0 ? 
                newState.headsCount += 1 :
                newState.tailsCount += 1

            return newState;
        }

       
)

    }



    render() {
        return (
            <div className="CoinFlip">
                <div className="CoinFlip-image">
                    {this.state.currImage}
                </div>
            <button onClick={()=>{this.flip()}}>Flip Me!</button>

            <div class="CoinFlip-result">
                Out of {this.state.flipCounter} flips, there has been {this.state.headsCount} heads and {this.state.tailsCount} tails.
            </div>
            </div>
        )
    }
}

export default CoinFlip
