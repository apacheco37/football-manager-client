import { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { UserContext } from "../App";

const Menu = styled.div({
  display: "flex",
  flexDirection: "column",
});

const MenuItem = styled.p({
  margin: "1rem",
});

function Sidebar() {
  const { user } = useContext(UserContext);

  return (
    <Menu>
      {user ? <p>Welcome {user.username}!</p> : <p>User not authenticated</p>}
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/login">Login</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/signup">Signup</Link>
      </MenuItem>
    </Menu>
  );
}

export default Sidebar;
