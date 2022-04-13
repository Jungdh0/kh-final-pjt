import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Login from "../routes/Login";
import MyPage from "../routes/MyPage";
import EditProfile from "../routes/EditProfile";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "../routes/MainPage";
import ExplorePage from "../routes/ExplorePage";
import LikePage from "../routes/LikePage";
import TestPage from "../routes/TestPage";
import CoverPage from "../routes/CoverPage";
import DetailPage from "../routes/DetailPage";
import SearchPage from "../routes/SearchPage";

const AppRouter = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<CoverPage />}></Route>
        <Route path="/coverPage" element={<CoverPage />}></Route>
        <Route path="/testPage" element={<TestPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mainPage" element={<MainPage />}></Route>
        <Route path="/searchPage" element={<SearchPage />}></Route>
        <Route path="/explorePage" element={<ExplorePage />}></Route>
        <Route path="/detailPage" element={<DetailPage />}></Route>
        <Route path="/likePage" element={<LikePage />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default AppRouter;
