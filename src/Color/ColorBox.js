import React, { Component } from 'react'
import { arrShuffler } from '../helpers'
import './Color.css'

export class ColorBox extends Component {
    static defaultProps = {
        colors : ['purple', 'magenta', 'violet', 'pink']
    }

    
    constructor(props){
        super(props);

        this.state = {
            color: arrShuffler(this.props.colors)
        }

        

    }

    

    colorGen (){
        
       let newColor = arrShuffler(this.props.colors);

       do {
            newColor = arrShuffler(this.props.colors);
       }
       
       while(newColor === this.state.color)

       this.setState({
           color: newColor
       })
    }

    handleClick(){
        this.colorGen();
    }


    render() {
        return (
            <div className="ColorBox" 
                 style={{backgroundColor: this.state.color}}
                 onClick={()=> {this.handleClick()}}>
            <div className="ColorBox-text">
                 {this.state.color}
            </div>
            </div>
        )
    }
}

export default ColorBox
