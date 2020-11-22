import React, { Component } from 'react'
import ColorBox from './ColorBox'

export class BoxContainer extends Component {

    static defaultProps = {
        numBoxes: 24 
    }
    render() {
        const Boxes = Array.from({length: this.props.numBoxes}).map(() => (
         <ColorBox />
        ))
        return (
            <div className="BoxContainer">
                {Boxes}
            </div>
        )
    }
}

export default BoxContainer
