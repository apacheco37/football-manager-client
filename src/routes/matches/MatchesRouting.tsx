import { Outlet, Route, Routes } from "react-router-dom";
import MatchDetails from "./MatchDetails/MatchDetails";
import MatchList from "./MatchList/MatchList";

export default function MatchesRouting() {
  return (
    <Routes>
      <Route path="" element={<Outlet />}>
        <Route index element={<MatchList />} />
        <Route path=":matchID" element={<MatchDetails />} />
      </Route>
    </Routes>
  );
}
