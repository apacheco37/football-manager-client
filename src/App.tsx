import styled from "@emotion/styled";
import Sidebar from "./Sidebar";

const AppDiv = styled.div({
  textAlign: "center",
  display: "flex",
});

const Header = styled.header({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
  width: "100%",
});

function App() {
  return (
    <AppDiv>
      <Sidebar />
      <Header>
        <p>Welcome to Football Manager</p>
      </Header>
    </AppDiv>
  );
}

export default App;
