// tslint:disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    homeTeam
    awayTeam
    gameDay
    division
    location
  }
}
`;
export const listGames = `query ListGames(
  $filter: TableGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      homeTeam
      awayTeam
      gameDay
      division
      location
    }
    nextToken
  }
}
`;
