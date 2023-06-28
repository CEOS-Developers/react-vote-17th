import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';
import { RecoilRoot } from 'recoil';

import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import MainPage from './pages/Main/MainPage';
import PartMainPage from './pages/Part/PartMainPage';
import PartVotePage from './pages/Part/PartVotePage';
import PartResultPage from './pages/Part/PartResultPage';
import DemoMainPage from './pages/Demo/DemoMainPage';
import DemoVotePage from './pages/Demo/DemoVotePage';
import DemoResultPage from './pages/Demo/DemoResultPage';
import Header from './components/Header';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />

            <Route path="/part" element={<PartMainPage />} />
            <Route path="/part/vote" element={<PartVotePage />} />
            <Route path="/part/result" element={<PartResultPage />} />

            <Route path="/demo" element={<DemoMainPage />} />
            <Route path="/demo/vote" element={<DemoVotePage />} />
            <Route path="/demo/result" element={<DemoResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

const Layout = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: 'calc(100vh - 3.5rem)',
        paddingTop: '3.5rem',
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
