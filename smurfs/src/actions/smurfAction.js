import axios from "axios";

export const getCharacters = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CHARACTER_STAR" });
    axios
      .get("http://localhost:3333/smurfs/")
      .then((res) => {
        console.log("res",res.data)
        dispatch({
          type: "FETCH_CHARACTERS_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "FETCH_CHARACTER_FAIL",
        });
      });
  };
};

export const addCharacters = (name, age, height) => {
  return (dispatch) => {
    dispatch({ type: "ADD_CHARACTER_STAR" });
    axios
      .post("http://localhost:3333/smurfs/", {
        name: name,
        age: age,
        height: height,
      })
      .then((res) => {
        console.log("res", res.data);
        const newOne = res.data[res.data.length-1];
        dispatch({
          type: "ADD_CHARACTERS_SUCCESS",
            name: newOne.name,
            age: newOne.age,
            height: newOne.height,
        });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
            type: "ADD_CHARACTER_FAIL",
          });
      });
  };
};
