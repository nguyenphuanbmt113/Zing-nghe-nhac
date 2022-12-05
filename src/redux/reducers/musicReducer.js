import actionTypes from "../actions/actionsType";

const initState = {
  isLoading: false,
  sourse: "",
  InfoSong: {},
  album: [],
  curSongId: null,
  curAlbumId: null,
  isPlaying: false,
  newReleases: {},
  watchRecentSong: [],
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
    case actionTypes.SET_CUR_ALBUM_ID:
      return {
        ...state,
        curAlbumId: action.albumId,
      };
    case actionTypes.RESENT_SONG:
      let valueArr = state.watchRecentSong.map(function (item) {
        return item.title;
      });
      let isDuplicate = valueArr.some(function (item, idx) {
        return item === action.data.title;
      });
      let songs = state.watchRecentSong;
      if (isDuplicate === false) {
        songs = [action.data, ...state.watchRecentSong];
      }
      if (songs.length < 15) {
        songs = [action.data, ...state.watchRecentSong];
      } else {
        songs = songs.filter((item, index, seft) => index !== seft.length - 1);
      }
      return {
        ...state,
        watchRecentSong: songs,
      };

    default:
      return state;
  }
};

export default musicReducer;
