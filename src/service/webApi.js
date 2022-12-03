import axios from "./customApi";

const getHome = () => {
  return axios.get("/home");
};
const getDetailSongById = (idSong) => {
  return axios.get(`/song?id=${idSong}`);
};
const getSongInfo = (idSong) => {
  return axios.get(`/infosong?id=${idSong}`);
};
//get abum
const getAlbum = (idPlaylist) => {
  return axios.get(`/detailplaylist?id=${idPlaylist}`);
};
export { getHome, getDetailSongById, getSongInfo, getAlbum };
