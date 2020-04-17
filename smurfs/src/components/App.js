import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getCharacters, addCharacters } from "../actions/smurfAction";

const App = (props) => {
  //console.log('props',props);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newHeight, setNewHeight] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setNewName(e.target.value);
  };
  const handleAgeChange = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setNewAge(e.target.value);
  };
  const handleHeightChange = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setNewHeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewName("");
    setNewAge("");
    setNewHeight("");
  };

  useEffect(() => {
    // call an action creator
    props.getCharacters();
  },[props.addCharacters()]);

  //console.log("props", props);
  return (
    <div className="App">
      <div className="header">
        <h1>SMURFS! 👩‍❤️‍💙 </h1>
        {props.smurf.map((c) => (
          <div key={c.id}>
            <h3>Name: {c.name}</h3>
            <h6>Age: {c.age}</h6>
            <h6>Height: {c.height}</h6>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleNameChange}
        />
        <input type="text" placeholder="age" onChange={handleAgeChange} />
        <input type="text" placeholder="height" onChange={handleHeightChange} />
        <button onClick={() => props.addCharacters(newName, newAge, newHeight)}>
          create new smurf
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    smurf: state.reducer.smurf,
    fetchingCharacter: state.reducer.fetchingCharacter,
    error: state.reducer.error,
  };
};

export default connect(mapStateToProps, { getCharacters, addCharacters })(App);
