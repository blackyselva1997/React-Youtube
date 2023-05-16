import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./YouTube/Home";
import Navbar from "./YouTube/Navbar";
import { Provider, useSelector } from "react-redux";
import { Stores } from "./YouTube/Stores";
import PlayVideo from "./YouTube/PlayVideo";
import Sign from "./YouTube/Sign";
import History from "./YouTube/History";
import Library from "./YouTube/Library";

const Routing = () => {
  const state = useSelector(({ data }) => data);

  return (
    <BrowserRouter>
      {state?.login ? (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path={"/home"} element={<Home />}></Route>
            <Route path={"*"} element={<Home />}></Route>
            <Route path={"/playvideo"} element={<PlayVideo />}></Route>
            <Route path={"/history"} element={<History />}></Route>
            <Route path={"/library"} element={<Library />}></Route>
          </Routes>
        </>
      ) : (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path={"/home"} element={<Home />}></Route>
            <Route path={"*"} element={<Home />}></Route>
            <Route path={"/sign"} element={<Sign />}></Route>
            <Route path={"/history"} element={<History />}></Route>
            <Route path={"/playvideo"} element={<PlayVideo />}></Route>
            <Route path={"/library"} element={<Library />}></Route>
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

const ProviderSetUp = () => {
  return (
    <Provider store={Stores}>
      <Routing />
    </Provider>
  );
};

export default ProviderSetUp;
