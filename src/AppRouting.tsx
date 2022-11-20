import { Route, Routes } from "react-router-dom";

import Login from "./routes/login/Login";
import Signup from "./routes/signup/Signup";
import Dashboard from "./routes/dashboard/Dashboard";
import Home from "./routes/home/Home";
import MatchDetails from "./components/match/MatchDetails/MatchDetails";
import MatchList from "./components/match/MatchList";
import PlayersRouting from "./routes/players/PlayersRouting";

function AppRouting() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="players/*" element={<PlayersRouting />} />
      <Route path="matches" element={<MatchList />} />
      <Route path="matches/:matchID" element={<MatchDetails />} />
    </Routes>
  );
}

export default AppRouting;
