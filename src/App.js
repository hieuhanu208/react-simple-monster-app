import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchText: '',
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  render() {
    const {monsters, searchText} = this.state;
    const filterMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchText.toLowerCase())
    )
  
    return (
      <div className="App">
        <SearchBox placeholder="SEARCH FOR MONSTER"
        handleChange={e => this.setState({searchText: e.target.value})}/>
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
