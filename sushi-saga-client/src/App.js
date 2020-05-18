import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi: [],
    displayIndex: 0,
    usersWallet: 100
  }

  componentDidMount()
  {
    fetch(API)
    .then(res => res.json())
    .then(json => this.setState({
      sushis: json
    }))
  }

  eatSushi = (sushiToEat) => {
    //console.log(`called eatSushi with ${sushiToEat.name}`)
    if(this.state.usersWallet >= sushiToEat.price)
    {
      if(!this.state.eatenSushi.includes(sushiToEat))
      {
        this.setState({
          eatenSushi: [...this.state.eatenSushi, sushiToEat],
          usersWallet: this.state.usersWallet - sushiToEat.price
        })
      }
    }
  }

  getCurrentFourSushi = () => {
    console.log(`getCurrentFourSushi, value of display index = ${this.state.displayIndex}`)
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  nextFourSushi = () => {
      //console.log("nextFourSushi")
    let updatedIndex = this.state.displayIndex +4    
    updatedIndex = updatedIndex > this.state.sushis.length-1 ? 0 : updatedIndex
    console.log(`getCurrentFourSushi, value of updatedIndex= ${updatedIndex}`)
    this.setState({
      displayIndex: updatedIndex
    })
  }

  addUserFunds = (event) =>
  {
    event.preventDefault()
    let inputFunds = parseInt(event.currentTarget.children[0].value)
    inputFunds = inputFunds ? inputFunds : 0
    console.log(`${inputFunds}`)
    this.setState({
      usersWallet: inputFunds+this.state.usersWallet
    })
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.addUserFunds}>
        Add $ to Budget
          <input type="text" />
          <input type="submit" />
        </form>
        <SushiContainer displaySushis={this.getCurrentFourSushi()}
          more={this.nextFourSushi}
          eatenSushi={this.state.eatenSushi}
          eatSushi={this.eatSushi}/>
        <Table usersBalance={this.state.usersWallet} emptyPlates={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;