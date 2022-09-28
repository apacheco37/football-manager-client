import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useContext, useMemo } from "react";

import { UserContext } from "../../App";
import {
  MatchEventType,
  MatchList_TeamMatchesDocument,
  MatchList_TeamMatchesQuery,
  MatchTeam,
} from "../../graphql-generated";

type MatchType = NonNullable<
  MatchList_TeamMatchesQuery["team"]
>["matches"][number];

function MatchList() {
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
        render: (_, match) =>
          `${match.events.reduce(
            (previousValue, event) =>
              event.type === MatchEventType.Goal &&
              event.team === MatchTeam.Home
                ? ++previousValue
                : previousValue,
            0
          )} - ${match.events.reduce(
            (previousValue, event) =>
              event.type === MatchEventType.Goal &&
              event.team === MatchTeam.Away
                ? ++previousValue
                : previousValue,
            0
          )}`,
      },
      { dataIndex: ["awayTeam", "name"], title: "Away Team" },
    ],
    []
  );

  if (loading) return null;

  return (
    data?.team && (
      <Table
        dataSource={data.team.matches}
        columns={columns}
        rowKey={(record) => record.id}
      ></Table>
    )
  );
}

export default MatchList;
