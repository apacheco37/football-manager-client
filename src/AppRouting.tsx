import { Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import PlayerList from "./components/player/PlayerList";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/players" element={<PlayerList />} />
    </Routes>
  );
}

export default AppRouting;
