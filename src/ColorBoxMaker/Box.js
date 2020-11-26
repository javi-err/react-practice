import React, { Component } from 'react'

export class Box extends Component {
    
    render() {

        return (
            <div className="Box" style={{
                height: `${this.props.height}px`,
                width:`${this.props.width}px`,
                backgroundColor: this.props.color
            }}>
                
            <button>X</button>
            </div>

        )
    }
}

export default Box
