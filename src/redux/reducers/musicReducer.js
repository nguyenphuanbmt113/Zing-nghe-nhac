import actionTypes from "../actions/actionsType";

const initState = {
  isLoading: false,
  sourse: "",
  InfoSong: {},
  album: [],
  curSongId: null,
  isPlaying: false,
  newReleases: {},
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.sid || null,
      };
    case actionTypes.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };
    case actionTypes.GET_INFO_SONG:
      return {
        ...state,
        InfoSong: action.InfoSong,
      };
    case actionTypes.GET_ALBUM:
      return {
        ...state,
        album: action.album,
      };
    case actionTypes.GET_SOURSE:
      return {
        ...state,
        sourse: action.sourse["128"],
      };
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: action.flag,
      };

    default:
      return state;
  }
};

export default musicReducer;
