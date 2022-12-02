import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { path } from "./ultis/path";
import { Public, Home, Album, WeekRank } from "./containers/public/index";
const App = () => {
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
