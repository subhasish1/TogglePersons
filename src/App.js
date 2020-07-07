import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "maxyyyyy", age: 25 },
      { name: "max", age: 25 },
      { name: "max", age: 25 },
    ],
    showPersons: false,
  });

  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: "newName", age: 258 },
        { name: "max", age: 25 },
        { name: event.target.value, age: 250 },
      ],
    });
  };

  const [showPersons, setShowPersonstate] = useState((showPersons: false));

  const toggleName = () => {
    this.state.showPersons;
  };

  const switchNameHandler = (newName, age) => {
    setPersonState({
      persons: [
        { name: newName, age: age },
        { name: "max", age: 25 },
        { name: "max", age: 250 },
      ],
    });
  };
  const buttonStyle = {
    backgroundColor: "white",
    front: "inherit",
    border: "2px solid blue",
    padding: "10 px",
    cursor: "pointer",
  };
  return (
    <div className="App">
      <h1>React App</h1>
      <button style={buttonStyle} onClick={toggleName}>
        Toggle Name
      </button>
      {this.StaticRange.showPersons ? (
        <div>
          <Person
            name={personState.persons[0].name}
            age={personState.persons[0].age}
          />
          <Person
            name={personState.persons[1].name}
            age={personState.persons[1].age}
            click={switchNameHandler.bind(this, "new", 100)}
          >
            My Hobbies:Racing
          </Person>
          <Person
            name={personState.persons[2].name}
            age={personState.persons[2].age}
            clickk={nameChangeHandler}
          />
        </div>
      ) : null}
    </div>
  );
};

export default app;
