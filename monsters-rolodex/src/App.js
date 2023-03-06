import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    // ilk burası calısır
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    // ilk iki kısım calıstıktan sonra burası calısır
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    // ikinci olarak burası calısır
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    console.log("render");

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12">
              <h1 className=" text-center mb-5 app-title">Monster Rolodex</h1>
            </div>
            <div className="col-12">
             <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className='monster-search-box'/>
            </div>
            <div className="col-12 mt-5 d-flex flex-wrap justify-content-center">
              <CardList monsters={filteredMonsters} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
