import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-bos.components'
import './App.css';



class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      serachField: '',
      
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  onSearchChange = (event) => {
    this.setState({ serachField: event.target.value })
  }


  render() {
    const { monsters, serachField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(serachField.toLowerCase()))

    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
          <SearchBox 
          placeholder="search monsters"
          handleChange={this.onSearchChange}/>
          <CardList monsters={filteredMonsters} />         
      </div>
    );
    
  }
}

export default App;
