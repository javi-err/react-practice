import React, { Component } from 'react'
import Box from './Box'
import BoxListForm from './BoxListForm'



export class BoxList extends Component {
    constructor(){
        super()

        this.state = {boxes :[]}
        this.createBox = this.createBox.bind(this)
        this.remove = this.remove.bind(this)
    }

    createBox(newBox){
        this.setState(()=>({
           boxes : [...this.state.boxes, newBox]
        }))
    }

    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !==id)})
    }
    render() {
        return (
            
            <div className="BoxList">
                <BoxListForm createBox={this.createBox} remove={this.remove}/>
                {this.state.boxes.map(box => {
                   return  <Box key={box.id} height={box.height} width={box.width} color={box.color} />
                })}
            </div>
        )
    }
}

export default BoxList
