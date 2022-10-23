/* eslint-disable prettier/prettier */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Match = {
  __typename?: 'Match';
  awayLineup: Array<PlayerOnLineup>;
  awayRatings: MatchRatings;
  awayTeam: Team;
  events: Array<MatchEvent>;
  homeLineup: Array<PlayerOnLineup>;
  homeRatings: MatchRatings;
  homeTeam: Team;
  id: Scalars['ID'];
  summary: MatchSummary;
};

export type MatchEvent = {
  __typename?: 'MatchEvent';
  id: Scalars['ID'];
  minute: Scalars['Int'];
  players: Array<Player>;
  team: MatchTeam;
  type: MatchEventType;
};

export enum MatchEventType {
  Card = 'CARD',
  Goal = 'GOAL',
  Injury = 'INJURY',
  Substitution = 'SUBSTITUTION'
}

export type MatchRatings = {
  __typename?: 'MatchRatings';
  attack: Scalars['Float'];
  defense: Scalars['Float'];
  goalkeeping: Scalars['Float'];
  id: Scalars['ID'];
  midfield: Scalars['Float'];
};

export type MatchSummary = {
  __typename?: 'MatchSummary';
  awayCards: Scalars['Int'];
  awayGoals: Scalars['Int'];
  homeCards: Scalars['Int'];
  homeGoals: Scalars['Int'];
};

export enum MatchTeam {
  Away = 'AWAY',
  Home = 'HOME'
}

export type Mutation = {
  __typename?: 'Mutation';
  _empty: Maybe<Scalars['String']>;
  login: Maybe<User>;
  playMatch: Match;
  signup: User;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationPlayMatchArgs = {
  input: PlayMatchInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type PlayMatchInput = {
  awayLineup: Array<PlayerOnLineupInput>;
  awayTeamID: Scalars['ID'];
  homeLineup: Array<PlayerOnLineupInput>;
  homeTeamID: Scalars['ID'];
};

export type Player = {
  __typename?: 'Player';
  age: Maybe<Scalars['Int']>;
  attacker: Maybe<Scalars['Int']>;
  defender: Maybe<Scalars['Int']>;
  firstName: Maybe<Scalars['String']>;
  goalkeeper: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  lastName: Maybe<Scalars['String']>;
  midfielder: Maybe<Scalars['Int']>;
  talent: Maybe<Scalars['Int']>;
  team: Maybe<Team>;
};

export type PlayerOnLineup = {
  __typename?: 'PlayerOnLineup';
  player: Player;
  position: Position;
};

export type PlayerOnLineupInput = {
  playerID: Scalars['ID'];
  position: Position;
};

export enum Position {
  Attacker = 'ATTACKER',
  Defender = 'DEFENDER',
  Goalkeeper = 'GOALKEEPER',
  Midfielder = 'MIDFIELDER'
}

export type Query = {
  __typename?: 'Query';
  _empty: Maybe<Scalars['String']>;
  match: Maybe<Match>;
  player: Maybe<Player>;
  players: Array<Player>;
  team: Maybe<Team>;
  verify: Maybe<User>;
};


export type QueryMatchArgs = {
  id: Scalars['ID'];
};


export type QueryPlayerArgs = {
  id: Scalars['ID'];
};


export type QueryPlayersArgs = {
  teamID: Scalars['ID'];
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  matches: Array<Match>;
  name: Scalars['String'];
  players: Array<Player>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  team: Maybe<Team>;
  username: Scalars['String'];
};

export type App_GetLoggedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type App_GetLoggedUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, team: { __typename?: 'Team', id: string, name: string } | null } | null };

export type Login_LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type Login_LoginMutation = { __typename?: 'Mutation', user: { __typename?: 'User', id: string, username: string, team: { __typename?: 'Team', id: string, name: string } | null } | null };

export type MatchDetails_MatchDetailsQueryVariables = Exact<{
  matchID: Scalars['ID'];
}>;


export type MatchDetails_MatchDetailsQuery = { __typename?: 'Query', match: { __typename?: 'Match', homeTeam: { __typename?: 'Team', name: string }, awayTeam: { __typename?: 'Team', name: string }, events: Array<{ __typename?: 'MatchEvent', minute: number, type: MatchEventType, team: MatchTeam, players: Array<{ __typename?: 'Player', firstName: string | null, lastName: string | null }> }>, homeRatings: { __typename?: 'MatchRatings', attack: number, midfield: number, defense: number, goalkeeping: number }, awayRatings: { __typename?: 'MatchRatings', attack: number, midfield: number, defense: number, goalkeeping: number }, homeLineup: Array<{ __typename?: 'PlayerOnLineup', position: Position, player: { __typename?: 'Player', firstName: string | null, lastName: string | null } }>, awayLineup: Array<{ __typename?: 'PlayerOnLineup', position: Position, player: { __typename?: 'Player', firstName: string | null, lastName: string | null } }>, summary: { __typename?: 'MatchSummary', homeGoals: number, awayGoals: number, homeCards: number, awayCards: number } } | null };

export type MatchList_TeamMatchesQueryVariables = Exact<{
  teamID: Scalars['ID'];
}>;


export type MatchList_TeamMatchesQuery = { __typename?: 'Query', team: { __typename?: 'Team', matches: Array<{ __typename?: 'Match', id: string, homeTeam: { __typename?: 'Team', name: string }, awayTeam: { __typename?: 'Team', name: string }, events: Array<{ __typename?: 'MatchEvent', type: MatchEventType, team: MatchTeam }>, summary: { __typename?: 'MatchSummary', homeGoals: number, awayGoals: number, homeCards: number, awayCards: number } }> } | null };

export type PlayerDetails_PlayerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PlayerDetails_PlayerQuery = { __typename?: 'Query', player: { __typename?: 'Player', firstName: string | null, lastName: string | null, age: number | null, talent: number | null, attacker: number | null, midfielder: number | null, defender: number | null, goalkeeper: number | null } | null };

export type PlayerList_PlayersQueryVariables = Exact<{
  teamID: Scalars['ID'];
}>;


export type PlayerList_PlayersQuery = { __typename?: 'Query', players: Array<{ __typename?: 'Player', id: string, firstName: string | null, lastName: string | null, age: number | null, talent: number | null, attacker: number | null, midfielder: number | null, defender: number | null, goalkeeper: number | null }> };


export const App_GetLoggedUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"App_GetLoggedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"verify"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<App_GetLoggedUserQuery, App_GetLoggedUserQueryVariables>;
export const Login_LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login_Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Login_LoginMutation, Login_LoginMutationVariables>;
export const MatchDetails_MatchDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MatchDetails_MatchDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matchID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"match"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matchID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minute"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeRatings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"midfield"}},{"kind":"Field","name":{"kind":"Name","value":"defense"}},{"kind":"Field","name":{"kind":"Name","value":"goalkeeping"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awayRatings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"midfield"}},{"kind":"Field","name":{"kind":"Name","value":"defense"}},{"kind":"Field","name":{"kind":"Name","value":"goalkeeping"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeLineup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"awayLineup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homeGoals"}},{"kind":"Field","name":{"kind":"Name","value":"awayGoals"}},{"kind":"Field","name":{"kind":"Name","value":"homeCards"}},{"kind":"Field","name":{"kind":"Name","value":"awayCards"}}]}}]}}]}}]} as unknown as DocumentNode<MatchDetails_MatchDetailsQuery, MatchDetails_MatchDetailsQueryVariables>;
export const MatchList_TeamMatchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MatchList_TeamMatches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matches"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"team"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homeGoals"}},{"kind":"Field","name":{"kind":"Name","value":"awayGoals"}},{"kind":"Field","name":{"kind":"Name","value":"homeCards"}},{"kind":"Field","name":{"kind":"Name","value":"awayCards"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MatchList_TeamMatchesQuery, MatchList_TeamMatchesQueryVariables>;
export const PlayerDetails_PlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlayerDetails_Player"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"talent"}},{"kind":"Field","name":{"kind":"Name","value":"attacker"}},{"kind":"Field","name":{"kind":"Name","value":"midfielder"}},{"kind":"Field","name":{"kind":"Name","value":"defender"}},{"kind":"Field","name":{"kind":"Name","value":"goalkeeper"}}]}}]}}]} as unknown as DocumentNode<PlayerDetails_PlayerQuery, PlayerDetails_PlayerQueryVariables>;
export const PlayerList_PlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlayerList_Players"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"players"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"talent"}},{"kind":"Field","name":{"kind":"Name","value":"attacker"}},{"kind":"Field","name":{"kind":"Name","value":"midfielder"}},{"kind":"Field","name":{"kind":"Name","value":"defender"}},{"kind":"Field","name":{"kind":"Name","value":"goalkeeper"}}]}}]}}]} as unknown as DocumentNode<PlayerList_PlayersQuery, PlayerList_PlayersQueryVariables>;