import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useContext } from "react";

import { UserContext } from "../../App";
import {
  MatchEventType,
  MatchList_TeamMatchesDocument,
  MatchTeam,
} from "../../graphql-generated";

const Table = styled.table({
  borderCollapse: "separate",
  borderSpacing: "2rem",
});

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

  if (loading) return null;

  const tableHeader = (
    <tr>
      <th>Home Team</th>
      <th>Score</th>
      <th>Away Team</th>
    </tr>
  );

  const tableRows = data?.team?.matches.map((match) => (
    <tr key={match.id}>
      <td>{match.homeTeam.name}</td>
      <td>
        {match.events.reduce(
          (previousValue, event) =>
            event.type === MatchEventType.Goal && event.team === MatchTeam.Home
              ? ++previousValue
              : previousValue,
          0
        )}
        {" - "}
        {match.events.reduce(
          (previousValue, event) =>
            event.type === MatchEventType.Goal && event.team === MatchTeam.Away
              ? ++previousValue
              : previousValue,
          0
        )}
      </td>
      <td>{match.awayTeam.name}</td>
    </tr>
  ));

  return (
    <Table>
      {tableHeader} {tableRows}
    </Table>
  );
}

export default MatchList;
