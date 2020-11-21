import React, { Component } from 'react'

export class Button extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="Button">
                <button onClick={() => {this.props.numberGenerator()}}>Guess</button>
            </div>
        )
    }
}

export default Button
