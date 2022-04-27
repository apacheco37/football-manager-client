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

  const notLoggedUserOptions = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Signup",
      link: "/signup",
    },
  ];
  const loggedUserOptions = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Players",
      link: "/players",
    },
  ];

  const menuItems = user
    ? loggedUserOptions.map((option, index) => (
        <MenuItem key={index}>
          <Link to={option.link}>{option.name}</Link>
        </MenuItem>
      ))
    : notLoggedUserOptions.map((option, index) => (
        <MenuItem key={index}>
          <Link to={option.link}>{option.name}</Link>
        </MenuItem>
      ));

  return (
    <Menu>
      {user ? <p>Welcome {user.username}!</p> : <p>User not authenticated</p>}
      {menuItems}
    </Menu>
  );
}

export default Sidebar;
