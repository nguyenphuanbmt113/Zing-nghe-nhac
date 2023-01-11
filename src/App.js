import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Signer } from "./components/Signer";
import { Follow } from "./containers/public/Follow";
import { Album, Home, Public, WeekRank } from "./containers/public/index";
import { MyMusic } from "./containers/public/MyMusic";
import { Search } from "./containers/public/Search";
import { SearchAll } from "./containers/public/SearchAll";
import { SearchSong } from "./containers/public/SearchSong";
import { getHomeData } from "./redux/actions/HomeActions";
import { path } from "./ultis/path";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);
  return (
    <Routes>
      <Route path={path.PUBLIC} element={<Public></Public>}>
        <Route path={path.HOME} element={<Home></Home>}></Route>
        <Route path={path.MYMUSIC} element={<MyMusic></MyMusic>}></Route>
        <Route path={path.FOLLOW} element={<Follow></Follow>}></Route>
        <Route path={path.ALBUM} element={<Album></Album>}></Route>
        <Route path={path.WEEK_RANK} element={<WeekRank></WeekRank>}></Route>
        <Route path={path.PROFILE} element={<Signer></Signer>}></Route>
        <Route path={path.SEARCH} element={<Search></Search>}>
          <Route
            path={path.SEARCH_ALL}
            element={<SearchAll></SearchAll>}></Route>
          <Route
            path={path.SEARCH_SONG}
            element={<SearchSong></SearchSong>}></Route>
        </Route>
        <Route path={path.START} element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
