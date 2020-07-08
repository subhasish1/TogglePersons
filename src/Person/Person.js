import React from "react";
// import Radium from "radium";
import styled from "styled-components";
// import "./Person.css";
const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 3px solid rgb(72, 192, 207);
  box-shadow: 0 2px 3 px rgb(184, 60, 60);
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: "450px";
  }
`;
const person = (props) => {
  // const style = {};
  return (
    // <div className="Person" style={style}>
    <StyleDiv>
      <p>
        {" "}
        I'm a {props.name} and I am {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
  );
};

// export default Radium(person);
export default person;
