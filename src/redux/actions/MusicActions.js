import actionTypes from "./actionsType";
//start , doing, finish
const setCurrentSongId = (sid) => ({
  type: actionTypes.SET_CUR_SONG_ID,
  sid,
});
export { setCurrentSongId };

