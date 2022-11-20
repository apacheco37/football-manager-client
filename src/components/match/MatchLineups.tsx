import { Divider, Space, Typography } from "antd";

import {
  MatchDetails_MatchDetailsQuery,
  Position,
} from "../../graphql-generated";

type Lineup = NonNullable<
  MatchDetails_MatchDetailsQuery["match"]
>["homeLineup"];

interface Props {
  homeTeamName: string;
  awayTeamName: string;
  homeLineup: Lineup;
  awayLineup: Lineup;
}

export default function MatchLineup({
  homeTeamName,
  awayTeamName,
  homeLineup,
  awayLineup,
}: Props) {
  return (
    <Space>
      <TeamLineup teamName={homeTeamName} lineup={homeLineup} />
      <Divider />
      <TeamLineup teamName={awayTeamName} lineup={awayLineup} />
    </Space>
  );
}

function TeamLineup({
  teamName,
  lineup,
}: {
  teamName: string;
  lineup: Lineup;
}) {
  return (
    <Space direction="vertical">
      <Typography.Text strong>{teamName}</Typography.Text>
      {lineup.map(({ position, player }, index) => (
        <PlayerOnLineup key={index} position={position} player={player} />
      ))}
    </Space>
  );
}

function PlayerOnLineup({
  position,
  player,
}: {
  position: Position;
  player: Lineup[number]["player"];
}) {
  return (
    <Space>
      <Typography.Text type="secondary">{position}</Typography.Text>
      <Typography.Text>{`${player.firstName} ${player.lastName}`}</Typography.Text>
    </Space>
  );
}
