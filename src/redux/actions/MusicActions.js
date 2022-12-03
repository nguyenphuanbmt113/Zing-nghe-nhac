import { getAlbum, getSongInfo } from "../../service/webApi";
import actionTypes from "./actionsType";
//start , doing, finish
const setCurrentSongId = (sid) => ({
  type: actionTypes.SET_CUR_SONG_ID,
  sid,
});

//start , doing, finish
const getDetailSong = (sid) => {
  return async (dispatch) => {
    try {
      const res = await getSongInfo(sid);
      if (res?.err === 0) {
        dispatch({
          type: actionTypes.GET_INFO_SONG,
          InfoSong: res?.data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_INFO_SONG,
          InfoSong: null,
        });
      }
    } catch (error) {
      console.log("err:", error);
    }
  };
};
const getAlbumRedux = (albumId) => {
  return async (dispatch) => {
    try {
      const res = await getAlbum(albumId);
      if (res?.err === 0) {
        dispatch({
          type: actionTypes.GET_ALBUM,
          album: res?.data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_ALBUM,
          album: null,
        });
      }
    } catch (error) {
      console.log("err:", error);
    }
  };
};
export { setCurrentSongId, getDetailSong, getAlbumRedux };
