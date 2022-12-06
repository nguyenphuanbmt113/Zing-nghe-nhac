import actionTypes from "../actions/actionsType";

const initState = {
  songs: [],
  top: {},
  counter: {},
  artists: [],
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      console.log(">>>>actions:", action);
      return {
        ...state,
        songs: action?.data?.songs,
        top: action?.data?.top,
        counter: action?.data?.counter,
        artists: action?.data?.artists,
      };

    default:
      return state;
  }
};

export default searchReducer;
