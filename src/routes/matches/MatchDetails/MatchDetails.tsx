import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Card, Space, Tabs, Typography } from "antd";
import { TabsProps } from "antd/lib/tabs";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { MatchDetails_MatchDetailsDocument } from "graphql-generated";
import MatchEvents from "components/match/MatchEvents";
import MatchLineup from "components/match/MatchLineups";
import MatchRatings from "components/match/MatchRatings";
import Loading from "components/Loading";

const StyledSpace = styled(Space)({
  display: "flex",
  justifyContent: "space-around",
});

const StyledTitle = styled(Typography.Title)({
  margin: "0 !important",
});

export default function MatchDetails() {
  const { matchID } = useParams();

  const { loading, data: { match } = {} } = useQuery(
    MatchDetails_MatchDetailsDocument,
    matchID
      ? {
          variables: {
            matchID,
          },
        }
      : { skip: true }
  );

  const {
    homeTeam,
    awayTeam,
    homeRatings,
    awayRatings,
    homeLineup,
    awayLineup,
    events,
  } = match || {};

  const items: TabsProps["items"] = useMemo(
    () => [
      {
        key: "events",
        label: "Events",
        children: homeTeam && awayTeam && events && (
          <MatchEvents
            homeTeamName={homeTeam.name}
            awayTeamName={awayTeam.name}
            events={events}
          />
        ),
      },
      {
        key: "lineup",
        label: "Lineup",
        children: homeTeam && awayTeam && homeLineup && awayLineup && (
          <MatchLineup
            homeTeamName={homeTeam.name}
            awayTeamName={awayTeam.name}
            homeLineup={homeLineup}
            awayLineup={awayLineup}
          />
        ),
      },
      {
        key: "ratings",
        label: "Ratings",
        children: homeTeam && awayTeam && homeRatings && awayRatings && (
          <MatchRatings
            homeTeamName={homeTeam.name}
            awayTeamName={awayTeam.name}
            homeRatings={homeRatings}
            awayRatings={awayRatings}
          />
        ),
      },
    ],
    [
      awayLineup,
      awayRatings,
      awayTeam,
      events,
      homeLineup,
      homeRatings,
      homeTeam,
    ]
  );

  if (loading) return <Loading />;

  // TODO return not found page
  if (!match) return null;

  return (
    <>
      <Card>
        <StyledSpace>
          <Space direction="vertical">
            <StyledTitle>{match.homeTeam.name}</StyledTitle>
            <StyledTitle level={5}>HOME</StyledTitle>
          </Space>
          <StyledTitle>{`${match.summary.homeGoals} - ${match.summary.awayGoals}`}</StyledTitle>
          <Space direction="vertical">
            <StyledTitle>{match.awayTeam.name}</StyledTitle>
            <StyledTitle level={5}>AWAY</StyledTitle>
          </Space>
        </StyledSpace>
      </Card>
      <Tabs items={items} size={"large"} />
    </>
  );
}
