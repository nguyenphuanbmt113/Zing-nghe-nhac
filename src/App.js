import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Album, Home, Public, WeekRank } from "./containers/public/index";
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
        <Route path={path.ALBUM} element={<Album></Album>}></Route>
        <Route path={path.WEEK_RANK} element={<WeekRank></WeekRank>}></Route>
        <Route path={path.START} element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
