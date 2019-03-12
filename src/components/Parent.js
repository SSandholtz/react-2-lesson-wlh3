import React, { Component } from 'react'

import Child from './Child'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      number: 6
    }

    this.increaseNumber = this.increaseNumber.bind(this)
  }

  increaseNumber() {
    this.setState({
      number: this.state.number + 1
    })
  }

  handleChange = e => {
    console.log(1111111, e.target.name, e.target.value)
    this.setState({
      number: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input name="number" type="number" value={this.state.number} onChange={this.handleChange}/>
        <h1>I am the parent</h1>
        <h1>{this.state.number}</h1>
        <Child 
          num={this.state.number} 
          tree="palm tree"
          handleClick={this.increaseNumber}/>
      </div>
    )
  }
}

export default Parent