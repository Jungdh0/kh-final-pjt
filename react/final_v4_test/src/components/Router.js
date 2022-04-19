import React from 'react';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import Login from '../routes/Login';
import MyPage from '../routes/MyPage';
import EditProfile from '../routes/EditProfile';
import Header from './Header';
import Footer from './Footer';
import MainPage from '../routes/MainPage';
import ExplorePage from '../routes/ExplorePage';
import LikePage from '../routes/LikePage';
import TestPage from '../routes/TestPage';
import CoverPage from '../routes/CoverPage';
import DetailPage from '../routes/DetailPage';
import SearchPage from '../routes/SearchPage';
import TestPageR from '../routes/TestPageR';
import { RecoilRoot, atom } from 'recoil';
import movies from '../sampledata/샘플.json';

// const layoutState = atom({
//   key: "layout",
//   default: true,
// });
//
// const loginState = atom({
//   key: "login",
//   default: false,
// });
//
// export { layoutState, loginState };

const AppRouter = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<CoverPage />}></Route>
        <Route path="/coverPage" element={<CoverPage />}></Route>
        {/* <Route path="/testPage" element={<TestPage />}></Route> */}
        <Route path="/testPage" element={<TestPageR />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/main/searchPage" element={<SearchPage />}></Route>
        <Route path="/main/explorePage" element={<ExplorePage />}></Route>
        <Route path="/main/detailPage/:contentCode" element={<DetailPage movies={movies} />}></Route>
        <Route path="/main/likePage" element={<LikePage />}></Route>
        <Route path="/main/myPage" element={<MyPage />}></Route>
        <Route path="/main/editProfile" element={<EditProfile />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default AppRouter;
