import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainVote from "../pages/MainVote";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

import PLVote from "../pages/PLVote";

import PartVote from "../pages/PartVote";
import DemoVote from "../pages/DemoVote";
import Result from "../pages/Result";

import Header from "../components/Header";
import PrivateRoute from "./PrivateRoute";

const VoteRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainVote />}
        />
        <Route element={<PrivateRoute authentication={false} />}>
          <Route
            path="/signup"
            element={<SignUp />}
          />
        </Route>
        <Route element={<PrivateRoute authentication={false} />}>
          <Route
            path="/login"
            element={<Login />}
          />
        </Route>

        {/* 인증된 사용자만 투표 페이지 접근 가능 */}
        <Route element={<PrivateRoute authentication={true} />}>
          <Route
            path="/partVote"
            element={<PartVote />}
          />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route
            path="/demoVote"
            element={<DemoVote />}
          />
        </Route>
        <Route
          path="/result"
          element={<Result />}
        />
        <Route
          path="/plvote"
          element={<PLVote />}
        />
      </Routes>
    </Router>
  );
};

export default VoteRouter;
