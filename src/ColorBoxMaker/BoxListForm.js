import React, { Component } from 'react'
import './ColorBoxMaker.css'
import uuid  from 'uuid/v4';

export class BoxListForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: "",
            width : "",
            color: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleCLick.bind(this)
    }


    handleChange(e){
        this.setState(()=> ({
            [e.target.name]: e.target.value,
        }))
    }

    handleSubmit(e){
        e.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox)
        this.setState({
            height: "",
            width : "",
            color: "",
        })
    }
    
    render() {
        return (
            <div className="BoxListForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="width">Width:</label>
                    <input 
                        name="width"
                        id="width"
                        type="number"
                        value={this.state.width}
                        placeholder="Input Width (px)"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="height">Height (px):</label>
                    <input onChange={this.handleChange} 
                        name="height"
                        id="height"
                        type="number"
                        value={this.state.height}
                        placeholder="Input height (px)"
                    />
                    <label htmlFor="color">Color:</label>
                    <input onChange={   this.handleChange}
                        name="color"
                        id="color"
                        type="text"
                        value={this.state.color}
                        placeholder="Input Color"
                    />
                    
                    <button type="submit" onClick={this.props.remove}>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default BoxListForm
