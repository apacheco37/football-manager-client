import styled from "@emotion/styled";
import { Divider, Space, Typography } from "antd";

import { MatchDetails_MatchDetailsQuery } from "../../graphql-generated";

type Ratings = NonNullable<
  MatchDetails_MatchDetailsQuery["match"]
>["homeRatings"];

interface Props {
  homeTeamName: string;
  awayTeamName: string;
  homeRatings: Ratings;
  awayRatings: Ratings;
}

export default function MatchRatings({
  homeTeamName,
  awayTeamName,
  homeRatings,
  awayRatings,
}: Props) {
  return (
    <Space>
      <TeamRatings teamName={homeTeamName} ratings={homeRatings} />
      <Divider />
      <TeamRatings teamName={awayTeamName} ratings={awayRatings} />
    </Space>
  );
}

function TeamRatings({
  teamName,
  ratings,
}: {
  teamName: string;
  ratings: Ratings;
}) {
  return (
    <Space direction="vertical">
      <Typography.Text strong>{teamName}</Typography.Text>
      <Rating label={"Attack:"} value={ratings.attack} />
      <Rating label={"Midfield:"} value={ratings.midfield} />
      <Rating label={"Defense:"} value={ratings.defense} />
      <Rating label={"Goalkeeping:"} value={ratings.goalkeeping} />
    </Space>
  );
}

const StyledSpaceRating = styled(Space)({
  display: "flex",
  justifyContent: "space-between",
});

function Rating({ label, value }: { label: string; value: number }) {
  return (
    <StyledSpaceRating>
      <Typography.Text>{label}</Typography.Text>
      <Typography.Text strong>{value.toFixed(1)}</Typography.Text>
    </StyledSpaceRating>
  );
}
