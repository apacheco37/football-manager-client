import { Typography } from "antd";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Typography.Title level={3}>{user?.team?.name}</Typography.Title>
      <Typography.Text>
        Managed by <i>{user?.username}</i>
      </Typography.Text>
    </>
  );
}
