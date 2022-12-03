import actionTypes from "../actions/actionsType";

const initState = {
  InfoSong: {},
  album: [],
  curSongId: null,
  isPlaying: false,
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

    default:
      return state;
  }
};

export default musicReducer;
