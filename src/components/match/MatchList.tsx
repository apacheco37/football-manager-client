import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../App";
import {
  MatchList_TeamMatchesDocument,
  MatchList_TeamMatchesQuery,
} from "../../graphql-generated";

type MatchType = NonNullable<
  MatchList_TeamMatchesQuery["team"]
>["matches"][number];

export default function MatchList() {
  const { user } = useContext(UserContext);

  const { loading, data } = useQuery(
    MatchList_TeamMatchesDocument,
    user?.team?.id
      ? {
          variables: {
            teamID: user.team.id,
          },
        }
      : { skip: true }
  );

  const columns: ColumnsType<MatchType> = useMemo(
    () => [
      { dataIndex: ["homeTeam", "name"], title: "Home Team" },
      {
        key: "score",
        title: "Score",
        render: (_, { id, summary }) => (
          <Link to={id}>{`${summary.homeGoals} - ${summary.awayGoals}`}</Link>
        ),
      },
      { dataIndex: ["awayTeam", "name"], title: "Away Team" },
    ],
    []
  );

  if (loading) return null;

  return data?.team ? (
    <Table
      dataSource={data.team.matches}
      columns={columns}
      rowKey={(record) => record.id}
    />
  ) : null;
}
