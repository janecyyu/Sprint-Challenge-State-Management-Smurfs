import axios from "axios";

const initialState = {
  smurf:[],
  fetchingCharacter: false,
  error: "",
};

//write logic
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARACTER_STAR":
      return { ...state, fetchingCharacter: true, error: "" };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        smurf:action.payload,
        fetchingCharacter: false,
      };
    case "FETCH_CHARACTER_FAIL":
      return { ...state, fetchingCharacter: false, error: "error!" };

    case "ADD_CHARACTER_START":
      return {  ...state, fetchingCharacter: true, error: "" };
    case "ADD_CHARACTER_SUCCESS":
        return {
            ...state,
            height: action.height,
            name: action.name,
            age: action.age,
            fetchingCharacter: false,
          };
    case "ADD_CHARACTER_FAIL":
      return { ...state, fetchingCharacter: false, error: "error!" };
    
    default:
      return state;
  }
};

export default reducer;
