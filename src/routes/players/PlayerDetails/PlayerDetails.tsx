import { useQuery } from "@apollo/client";
import { Space, Typography } from "antd";
import { useParams } from "react-router-dom";

import { PlayerDetails_PlayerDocument } from "graphql-generated";
import Loading from "components/Loading";

export default function PlayerDetails() {
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

  if (loading) return <Loading />;

  if (!player) return null;

  return (
    <Space direction="vertical">
      <Typography.Title level={2}>
        {`${player.firstName} ${player.lastName}`}
      </Typography.Title>
      <Typography.Text>Age: {player.age}</Typography.Text>
      <Typography.Text>Talent: {player.talent}</Typography.Text>
      <Typography.Text>
        <b>Skills:</b>
      </Typography.Text>
      <Typography.Text>Attacker: {player.attacker}</Typography.Text>
      <Typography.Text>Midfielder: {player.midfielder}</Typography.Text>
      <Typography.Text>Defender: {player.defender}</Typography.Text>
      <Typography.Text>Goalkeeper: {player.goalkeeper}</Typography.Text>
    </Space>
  );
}
