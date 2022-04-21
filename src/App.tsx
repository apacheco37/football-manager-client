import styled from "@emotion/styled";

const AppDiv = styled.div({
  textAlign: "center",
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
});

function App() {
  return (
    <AppDiv>
      <Header>
        <p>Welcome to Football Manager</p>
      </Header>
    </AppDiv>
  );
}

export default App;
