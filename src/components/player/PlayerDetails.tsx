import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PlayerDetails_PlayerDocument } from "../../graphql-generated";

function PlayerDetails() {
  const { playerID } = useParams();
  const { loading, data: { player } = {} } = useQuery(
    PlayerDetails_PlayerDocument,
    playerID
      ? {
          variables: {
            id: playerID,
          },
        }
      : { skip: true }
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
