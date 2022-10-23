import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Typography } from "antd";
import { MenuItemType } from "rc-menu/lib/interface";
import styled from "@emotion/styled";

import UserContext from "../contexts/UserContext";

const StyledText = styled(Typography.Text)({
  display: "flex",
  margin: "1rem",
});

export default function Sidebar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const notLoggedUserOptions: MenuItemType[] = [
    {
      key: "home",
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      key: "login",
      label: "Login",
      onClick: () => navigate("/login"),
    },
    {
      key: "signup",
      label: "Signup",
      onClick: () => navigate("/signup"),
    },
  ];

  const loggedUserOptions: MenuItemType[] = [
    {
      key: "dashboard",
      label: "Dashboard",
      onClick: () => navigate("/dashboard"),
    },
    {
      key: "players",
      label: "Players",
      onClick: () => navigate("/players"),
    },
    {
      key: "matches",
      label: "Matches",
      onClick: () => navigate("/matches"),
    },
  ];

  return (
    <>
      <StyledText>
        {user ? `Welcome ${user.username}!` : "User not authenticated"}
      </StyledText>
      <Menu items={user ? loggedUserOptions : notLoggedUserOptions}></Menu>
    </>
  );
}
