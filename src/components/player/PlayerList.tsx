import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import {
  PlayerList_PlayersDocument,
  PlayerList_PlayersQuery,
} from "../../graphql-generated";

type PlayerType = PlayerList_PlayersQuery["players"][number];

export default function PlayerList() {
  const { user } = useContext(UserContext);

  const { loading, data } = useQuery(
    PlayerList_PlayersDocument,
    user?.team?.id
      ? {
          variables: {
            teamID: user.team.id,
          },
        }
      : { skip: true }
  );

  const columns: ColumnsType<PlayerType> = useMemo(
    () => [
      {
        key: "name",
        title: "Name",
        render: (_, { id, firstName, lastName }) => (
          <Link to={id}>{`${firstName} ${lastName}`}</Link>
        ),
      },
      { dataIndex: "age", title: "Age" },
      { dataIndex: "talent", title: "Talent" },
      { dataIndex: "attacker", title: "Attacker" },
      { dataIndex: "midfielder", title: "Midfielder" },
      { dataIndex: "defender", title: "Defender" },
      { dataIndex: "goalkeeper", title: "Goalkeeper" },
    ],
    []
  );

  if (loading) return null;

  return (
    <Table
      dataSource={data?.players}
      columns={columns}
      rowKey={(record) => record.id}
    />
  );
}
