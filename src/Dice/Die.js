import React, { Component } from 'react'

export class Die extends Component {
    render() {
        return (
            <div className="Die">
                <div><i class={`fas fa-dice-${this.props.face}`}></i></div>
            </div>
        )
    }
}

export default Die
