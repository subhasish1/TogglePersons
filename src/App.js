import React, { useState, Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  // const [personState, setPersonState] = useState({
  //   persons: [
  //     { name: "maxyyyyy", age: 25 },
  //     { name: "max", age: 25 },
  //     { name: "max", age: 25 },
  //   ],
  //   showPersons: false,
  // });
  state = {
    persons: [
      { name: "su", age: 22 },
      { name: "subha", age: 222 },
      { name: "subhasish", age: 2222 },
    ],
    otherState: "Some Other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 322 },
        { name: "subhaddd", age: 33222 },
        { name: "subhasishddd", age: 3332222 },
      ],
    });
  };

  // const nameChangeHandler = (event) => {
  //   setPersonState({
  //     persons: [
  //       { name: "newName", age: 258 },
  //       { name: "max", age: 25 },
  //       { name: event.target.value, age: 250 },
  //     ],
  //   });
  // };

  // const [showPersons, setShowPersonstate] = useState((showPersons: false));

  // const toggleName = () => {
  //   this.state.showPersons;
  // };

  // const switchNameHandler = (newName, age) => {
  //   setPersonState({
  //     persons: [
  //       { name: newName, age: age },
  //       { name: "max", age: 25 },
  //       { name: "max", age: 250 },
  //     ],
  //   });
  // };
  // const buttonStyle = {
  //   backgroundColor: "white",
  //   front: "inherit",
  //   border: "2px solid blue",
  //   padding: "10 px",
  //   cursor: "pointer",
  // };
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 322 },
        { name: "subhaddd", age: 33222 },
        { name: "subhasishddd", age: 3332222 },
      ],
    });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        {/* <button style={buttonStyle} onClick={toggleName}>
          Toggle Name
        </button> */}

        <button onClick={this.togglePersonHandler}>Display/Hide</button>

        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler}
            >
              My Hobbies:Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
