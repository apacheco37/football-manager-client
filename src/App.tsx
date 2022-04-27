import { createContext, Dispatch, useState } from "react";
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Home from "./components/Home";

const AppDiv = styled.div({
  textAlign: "center",
  display: "flex",
});

const Content = styled.header({
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

interface UserContextProps {
  user: User | null;
  setUser: Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext({} as UserContextProps);

const GET_LOGGED_USER = gql`
  query GetLoggedUser {
    user: verify {
      id
      username
    }
  }
`;

interface User {
  id: string;
  username: string;
}

function App() {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const { loading } = useQuery(GET_LOGGED_USER, {
    onCompleted: (data) => setLoggedUser(data.user),
  });

  if (loading) return null;

  return (
    <UserContext.Provider value={{ user: loggedUser, setUser: setLoggedUser }}>
      <AppDiv>
        <Sidebar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Content>
      </AppDiv>
    </UserContext.Provider>
  );
}

export default App;
