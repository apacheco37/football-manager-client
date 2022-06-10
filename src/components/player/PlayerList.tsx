import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { PlayerList_PlayersDocument } from "../../graphql-generated";

function PlayerList() {
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

  if (loading) return null;

  const tableHeader = (
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Talent</th>
      <th>Attacker</th>
      <th>Midfielder</th>
      <th>Defender</th>
      <th>Goalkeeper</th>
    </tr>
  );

  const tableRows = data?.players.map((player) => (
    <tr key={player.id}>
      <td>
        <Link to={player.id}>
          {player.firstName} {player.lastName}
        </Link>
      </td>
      <td>{player.age}</td>
      <td>{player.talent}</td>
      <td>{player.attacker}</td>
      <td>{player.midfielder}</td>
      <td>{player.defender}</td>
      <td>{player.goalkeeper}</td>
    </tr>
  ));

  return (
    <table>
      {tableHeader} {tableRows}
    </table>
  );
}

export default PlayerList;
