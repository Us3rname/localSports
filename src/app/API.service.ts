/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  homeTeam?: string | null,
  awayTeam?: string | null,
  gameDay?: string | null,
  division?: string | null,
  location?: string | null,
};

export type UpdateGameInput = {
  id: string,
  homeTeam?: string | null,
  awayTeam?: string | null,
  gameDay?: string | null,
  division?: string | null,
  location?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type TableGameFilterInput = {
  id?: TableIDFilterInput | null,
  homeTeam?: TableStringFilterInput | null,
  awayTeam?: TableStringFilterInput | null,
  gameDay?: TableStringFilterInput | null,
  division?: TableStringFilterInput | null,
  location?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    homeTeam: string | null,
    awayTeam: string | null,
    gameDay: string | null,
    division: string | null,
    location: string | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    homeTeam: string | null,
    awayTeam: string | null,
    gameDay: string | null,
    division: string | null,
    location: string | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    homeTeam: string | null,
    awayTeam: string | null,
    gameDay: string | null,
    division: string | null,
    location: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    homeTeam: string | null,
    awayTeam: string | null,
    gameDay: string | null,
    division: string | null,
    location: string | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: TableGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "GameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      homeTeam: string | null,
      awayTeam: string | null,
      gameDay: string | null,
      division: string | null,
      location: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  id?: string | null,
  homeTeam?: string | null,
  awayTeam?: string | null,
  gameDay?: string | null,
  division?: string | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    homeTeam: string | null,
    awayTeam: string | null,
    gameDay: string | null,
    division: string | null,
    location: string | null,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  id?: string | null,
  homeTeam?: string | null,
  awayTeam?: string | null,
  gameDay?: string | null,
  division?: string | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    homeTeam: string | null,
    awayTeam: string | null,
    gameDay: string | null,
    division: string | null,
    location: string | null,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  id?: string | null,
  homeTeam?: string | null,
  awayTeam?: string | null,
  gameDay?: string | null,
  division?: string | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    homeTeam: string | null,
    awayTeam: string | null,
    gameDay: string | null,
    division: string | null,
    location: string | null,
  } | null,
};
