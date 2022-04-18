import React from "react";
import AppRouter from "./Router";
import { Route, Switch } from "react-router-dom";
import Login from "../routes/Login";
import CoverPage from "../routes/CoverPage";
import TestPage from "../routes/TestPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <AppRouter></AppRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
