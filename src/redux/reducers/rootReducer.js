import appReducer from "./appReducer";
import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import searchReducer from "./searchReducer";
const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const musicConfig = {
  ...commonConfig,
  key: "music",
  whitelist: [
    "curSongId",
    "InfoSong",
    "curAlbumId",
    "watchRecentSong",
    "top",
    "keyword",
  ],
};
const rootReducer = combineReducers({
  app: appReducer,
  music: persistReducer(musicConfig, musicReducer),
  search: persistReducer(musicConfig, searchReducer),
});

export default rootReducer;
