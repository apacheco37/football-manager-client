import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_PLAYER = gql`
  query Player($id: ID!) {
    player(id: $id) {
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

interface QueryPlayerResponse {
  player: Player;
}

interface Player {
  firstName: string;
  lastName: string;
  age: number;
  talent: number;
  attacker: number;
  midfielder: number;
  defender: number;
  goalkeeper: number;
}

function PlayerDetails() {
  const params = useParams();
  const { loading, data: { player } = {} } = useQuery<QueryPlayerResponse>(
    GET_PLAYER,
    {
      variables: {
        id: params.playerID,
      },
    }
  );

  if (loading) return null;

  return player ? (
    <div>
      <h2>
        {player.firstName} {player.lastName}
      </h2>
      <p>Age: {player.age}</p>
      <p>Talent: {player.talent}</p>
      <p>
        <b>Skills:</b>
      </p>
      <p>Attacker: {player.attacker}</p>
      <p>Midfielder: {player.midfielder}</p>
      <p>Defender: {player.defender}</p>
      <p>Goalkeeper: {player.goalkeeper}</p>
    </div>
  ) : null;
}

export default PlayerDetails;
