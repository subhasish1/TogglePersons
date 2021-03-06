import React, { useState, Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";
// import person from "./Person/Person";
import styled from "styled-components";

const StyledButton = styled.button`
  font: inherite;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.alt ? "red" : "salmon")};
  color: white;
  &:hover {
    background-color: Lightgreen;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "su", age: 22 },
      { id: "2", name: "subha", age: 222 },
      { id: "3", name: "subhasish", age: 2222 },
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const buttonStyle = {
      font: "inherite",
      padding: "10px",
      cursor: "pointer",
      backgroundColor: "green",
      color: "white",
      ":hover": {
        backgroundColor: "Lightgreen",
        color: "black",
      },
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(this)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // buttonStyle.backgroundColor = "red";
      // buttonStyle[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(" ")}>This really working</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          {" "}
          Display/Hide
        </StyledButton>

        {persons}
      </div>
    );
  }
}

export default App; //higher order component
//Radium allow to write css with sudo selector...like :hover also media queries
