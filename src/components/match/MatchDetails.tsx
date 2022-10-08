import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Card, Space, Typography } from "antd";
import { useParams } from "react-router-dom";

import { MatchDetails_MatchDetailsDocument } from "../../graphql-generated";

const StyledSpace = styled(Space)({
  display: "flex",
  justifyContent: "space-around",
});

const StyledTitle = styled(Typography.Title)({
  margin: "0 !important",
});

function MatchDetails() {
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

  if (loading) return null;

  return match ? (
    <>
      <Card>
        <StyledSpace>
          <StyledTitle>{match.homeTeam.name}</StyledTitle>
          <StyledTitle>{`${match.summary.homeGoals} - ${match.summary.awayGoals}`}</StyledTitle>
          <StyledTitle>{match.awayTeam.name}</StyledTitle>
        </StyledSpace>
      </Card>
    </>
  ) : null;
}

export default MatchDetails;
