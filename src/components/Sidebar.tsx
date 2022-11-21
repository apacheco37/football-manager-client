import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Menu, Typography } from "antd";
import { MenuItemType } from "rc-menu/lib/interface";
import styled from "@emotion/styled";

import UserContext from "contexts/UserContext";
import { useMutation } from "@apollo/client";
import { Sidebar_LogoutDocument } from "graphql-generated";

const StyledText = styled(Typography.Text)({
  display: "flex",
  margin: "1rem",
});

const StyledButton = styled(Button)({
  marginBottom: "1rem",
  marginLeft: "1rem",
});

export default function Sidebar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [logout] = useMutation(Sidebar_LogoutDocument);

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

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <StyledText>
        {user ? `Welcome ${user.username}!` : "User not authenticated"}
      </StyledText>
      {user && <StyledButton onClick={handleLogout}>Log Out</StyledButton>}
      <Menu items={user ? loggedUserOptions : notLoggedUserOptions}></Menu>
    </>
  );
}
