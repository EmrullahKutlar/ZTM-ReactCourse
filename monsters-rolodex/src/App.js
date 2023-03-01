import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
        },
        {
          name: "Dracula",
        },
        {
          name: "Zombie",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-row ">
              {this.state.monsters.map((item) => {
                return (
                  <div className=" card col-3 mb-3 mx-auto">
                    <h1>{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
