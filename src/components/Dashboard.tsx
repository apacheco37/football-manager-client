import { useContext } from "react";
import { UserContext } from "../App";

function Dashboard() {
  const { user } = useContext(UserContext);

  return <h2>{user?.team?.name}</h2>;
}

export default Dashboard;
