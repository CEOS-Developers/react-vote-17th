import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainVote from "../pages/MainVote";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const VoteRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainVote />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Router>
  );
};

export default VoteRouter;
