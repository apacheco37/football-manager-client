import { Route, Routes } from "react-router-dom";

import Login from "routes/login/Login";
import Signup from "routes/signup/Signup";
import Dashboard from "routes/dashboard/Dashboard";
import Home from "routes/home/Home";
import PlayersRouting from "routes/players/PlayersRouting";
import MatchesRouting from "routes/matches/MatchesRouting";

function AppRouting() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="players/*" element={<PlayersRouting />} />
      <Route path="matches/*" element={<MatchesRouting />} />
    </Routes>
  );
}

export default AppRouting;
