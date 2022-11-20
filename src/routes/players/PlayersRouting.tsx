import { Outlet, Route, Routes } from "react-router-dom";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import PlayerList from "./PlayersList/PlayerList";

export default function PlayersRouting() {
  return (
    <Routes>
      <Route path="" element={<Outlet />}>
        <Route index element={<PlayerList />} />
        <Route path=":playerID" element={<PlayerDetails />} />
      </Route>
    </Routes>
  );
}
