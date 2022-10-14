import { Card, Space, Typography } from "antd";

import {
  MatchDetails_MatchDetailsQuery,
  MatchTeam,
} from "../../../graphql-generated";

type Event = NonNullable<
  MatchDetails_MatchDetailsQuery["match"]
>["events"][number];

interface Props {
  homeTeamName: string;
  awayTeamName: string;
  events: Event[];
}

function MatchEvents({ homeTeamName, awayTeamName, events }: Props) {
  return (
    <Space direction="vertical">
      {events.map((event, index) => (
        <Card key={index}>
          <Event
            homeTeamName={homeTeamName}
            awayTeamName={awayTeamName}
            event={event}
          />
        </Card>
      ))}
    </Space>
  );
}

export default MatchEvents;

function Event({
  homeTeamName,
  awayTeamName,
  event,
}: {
  homeTeamName: string;
  awayTeamName: string;
  event: Event;
}) {
  return (
    <Space>
      <Typography.Text>{`${event.minute}'`}</Typography.Text>
      <Typography.Text strong>
        {event.team === MatchTeam.Home ? homeTeamName : awayTeamName}
      </Typography.Text>
      <Typography.Text italic>{`${event.type}`}</Typography.Text>
      <Typography.Text>{`${event.players.map(
        (player) => `${player.firstName} ${player.lastName} `
      )}`}</Typography.Text>
    </Space>
  );
}
