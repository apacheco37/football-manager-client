import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { UserContext } from "../../App";

const GET_PLAYERS = gql`
  query Players($teamID: ID!) {
    players(teamID: $teamID) {
      id
      firstName
      lastName
      age
      talent
      attacker
      midfielder
      defender
      goalkeeper
    }
  }
`;

interface QueryPlayersResponse {
  players: Player[];
}

interface Player {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  talent: number;
  attacker: number;
  midfielder: number;
  defender: number;
  goalkeeper: number;
}

function PlayerList() {
  const { user } = useContext(UserContext);

  const { loading, data } = useQuery<QueryPlayersResponse>(GET_PLAYERS, {
    variables: {
      teamID: user?.team?.id,
    },
  });

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
        {player.firstName} {player.lastName}
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
