import { Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import MatchList from "./components/match/MatchList";
import PlayerDetails from "./components/player/PlayerDetails";
import PlayerList from "./components/player/PlayerList";

function AppRouting() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="players" element={<PlayerList />} />
      <Route path="players/:playerID" element={<PlayerDetails />} />
      <Route path="matches" element={<MatchList />} />
    </Routes>
  );
}

export default AppRouting;
