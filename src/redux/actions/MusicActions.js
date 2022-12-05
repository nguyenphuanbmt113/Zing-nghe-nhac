import {
  getAlbum,
  getSongInfo,
  getSourseMusicById,
} from "../../service/webApi";
import actionTypes from "./actionsType";
//start , doing, finish
const setCurrentSongId = (sid) => ({
  type: actionTypes.SET_CUR_SONG_ID,
  sid,
});
const setCurrentAlbumId = (albumId) => ({
  type: actionTypes.SET_CUR_ALBUM_ID,
  albumId,
});
const setLoading = (flag) => ({
  type: actionTypes.LOADING,
  flag,
});
//layng music
const playingMusic = (flag) => ({
  type: actionTypes.PLAY,
  flag,
});
//detail song info
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
//album
const getAlbumRedux = (albumId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const res = await getAlbum(albumId);
      if (res?.err === 0) {
        dispatch({
          type: actionTypes.GET_ALBUM,
          album: res?.data,
        });
        dispatch(setLoading(false));
      } else {
        dispatch({
          type: actionTypes.GET_ALBUM,
          album: null,
        });
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.log("err:", error);
    }
  };
};
//getsoursemusic
const setSourseMusic = (sid) => {
  return async (dispatch) => {
    try {
      const res = await getSourseMusicById(sid);
      if (res?.err === 0) {
        dispatch({
          type: actionTypes.GET_SOURSE,
          sourse: res?.data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_INFO_SONG,
          sourse: null,
        });
      }
    } catch (error) {
      console.log("err:", error);
    }
  };
};

const SaveRecent = (data) => ({
  type: actionTypes.RESENT_SONG,
  data,
});
export {
  setCurrentSongId,
  getDetailSong,
  getAlbumRedux,
  playingMusic,
  setSourseMusic,
  setLoading,
  setCurrentAlbumId,
  SaveRecent,
};
