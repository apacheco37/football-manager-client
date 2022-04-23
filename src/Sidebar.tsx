import styled from "@emotion/styled";

const Menu = styled.div({
  display: "flex",
  flexDirection: "column",
});

const MenuItem = styled.a({
  padding: "1rem",
});

function Sidebar() {
  return (
    <Menu>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Signup</MenuItem>
    </Menu>
  );
}

export default Sidebar;
