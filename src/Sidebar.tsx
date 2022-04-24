import { useContext } from "react";
import styled from "@emotion/styled";

import { UserContext } from "./App";

const Menu = styled.div({
  display: "flex",
  flexDirection: "column",
});

const MenuItem = styled.a({
  padding: "1rem",
});

function Sidebar() {
  const { user } = useContext(UserContext);

  return (
    <Menu>
      {user ? <p>Welcome {user.username}!</p> : <p>User not authenticated</p>}
      <MenuItem href="/">Home</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Signup</MenuItem>
    </Menu>
  );
}

export default Sidebar;
