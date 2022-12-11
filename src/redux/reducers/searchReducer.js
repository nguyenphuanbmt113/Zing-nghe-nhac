import actionTypes from "../actions/actionsType";

const initState = {
  songs: [],
  top: {},
  counter: {},
  artists: [],
  playlists: [],
  keyword: "",
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return {
        ...state,
        songs: action?.data?.songs,
        top: action?.data?.top,
        counter: action?.data?.counter,
        artists: action?.data?.artists,
        playlists: action?.data?.playlists,
      };
    case actionTypes.SEARCH_VALUE:
      return {
        ...state,
        keyword: action?.flag,
      };

    default:
      return state;
  }
};

export default searchReducer;
