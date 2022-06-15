import { useContext } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
    {
      name: "Matches",
      link: "/matches",
    },
  ];

  const menuItems = user
    ? loggedUserOptions.map((option, index) => (
        <MenuItem key={index}>
          <NavLink
            to={option.link}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
            })}
          >
            {option.name}
          </NavLink>
        </MenuItem>
      ))
    : notLoggedUserOptions.map((option, index) => (
        <MenuItem key={index}>
          <NavLink
            to={option.link}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
            })}
          >
            {option.name}
          </NavLink>
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
