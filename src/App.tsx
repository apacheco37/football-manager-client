import { useState } from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { Layout } from "antd";

import AppRouting from "./AppRouting";
import Sidebar from "components/Sidebar";
import { App_GetLoggedUserDocument } from "graphql-generated";
import UserContext, { User } from "contexts/UserContext";
import Loading from "components/Loading";

const { Content, Sider } = Layout;

const StyledLayout = styled(Layout)({
  minHeight: "100vh",
});

const StyledContent = styled(Content)({
  padding: "2rem",
});

// const AppDiv = styled.div({
//   textAlign: "center",
//   display: "flex",
// });

// const Content = styled.header({
//   backgroundColor: "#282c34",
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: "calc(10px + 2vmin)",
//   color: "white",
//   width: "100%",
// });

export default function App() {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  const { loading } = useQuery(App_GetLoggedUserDocument, {
    onCompleted: (data) => setLoggedUser(data.user),
  });

  if (loading) return <Loading />;

  return (
    <UserContext.Provider value={{ user: loggedUser, setUser: setLoggedUser }}>
      <StyledLayout>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Sidebar />
        </Sider>
        <StyledContent>
          <AppRouting />
        </StyledContent>
      </StyledLayout>
    </UserContext.Provider>
  );
}
