import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: uuidv4(),
        },
        {
          name: "Frank",
          id: uuidv4(),
        },
        {
          name: "Jacky",
          id: uuidv4(),
        },
        {
          name: "Andrei",
          id: uuidv4(),
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
