// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame(
  $id: ID
  $homeTeam: String
  $awayTeam: String
  $gameDay: AWSDateTime
  $division: String
) {
  onCreateGame(
    id: $id
    homeTeam: $homeTeam
    awayTeam: $awayTeam
    gameDay: $gameDay
    division: $division
  ) {
    id
    homeTeam
    awayTeam
    gameDay
    division
    location
  }
}
`;
export const onUpdateGame = `subscription OnUpdateGame(
  $id: ID
  $homeTeam: String
  $awayTeam: String
  $gameDay: AWSDateTime
  $division: String
) {
  onUpdateGame(
    id: $id
    homeTeam: $homeTeam
    awayTeam: $awayTeam
    gameDay: $gameDay
    division: $division
  ) {
    id
    homeTeam
    awayTeam
    gameDay
    division
    location
  }
}
`;
export const onDeleteGame = `subscription OnDeleteGame(
  $id: ID
  $homeTeam: String
  $awayTeam: String
  $gameDay: AWSDateTime
  $division: String
) {
  onDeleteGame(
    id: $id
    homeTeam: $homeTeam
    awayTeam: $awayTeam
    gameDay: $gameDay
    division: $division
  ) {
    id
    homeTeam
    awayTeam
    gameDay
    division
    location
  }
}
`;
