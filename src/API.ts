/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  gameDay: string,
  scoreHome?: number | null,
  scoreAway?: number | null,
};

export type UpdateGameInput = {
  id: string,
  gameDay?: string | null,
  scoreHome?: number | null,
  scoreAway?: number | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type CreateStandingInput = {
  id?: string | null,
  team: string,
  matchPlayed?: number | null,
  win?: number | null,
  draw?: number | null,
  loses?: number | null,
  goalsFor?: number | null,
  goalsAgainst?: number | null,
  goalDifference?: number | null,
  points?: number | null,
  lastResults?: string | null,
};

export type UpdateStandingInput = {
  id: string,
  team?: string | null,
  matchPlayed?: number | null,
  win?: number | null,
  draw?: number | null,
  loses?: number | null,
  goalsFor?: number | null,
  goalsAgainst?: number | null,
  goalDifference?: number | null,
  points?: number | null,
  lastResults?: string | null,
};

export type DeleteStandingInput = {
  id?: string | null,
};

export type CreateSportsHallInput = {
  id?: string | null,
  name: string,
  street: string,
  streetNumber: number,
  streetNumberAddition?: string | null,
  zipCode: string,
  city: string,
  phone?: string | null,
  sportsHallClubId: string,
};

export type UpdateSportsHallInput = {
  id: string,
  name?: string | null,
  street?: string | null,
  streetNumber?: number | null,
  streetNumberAddition?: string | null,
  zipCode?: string | null,
  city?: string | null,
  phone?: string | null,
  sportsHallClubId?: string | null,
};

export type DeleteSportsHallInput = {
  id?: string | null,
};

export type CreateHallInput = {
  id?: string | null,
  name: string,
  hallSportsHallId: string,
};

export type UpdateHallInput = {
  id: string,
  name?: string | null,
  hallSportsHallId?: string | null,
};

export type DeleteHallInput = {
  id?: string | null,
};

export type CreateLeagueInput = {
  id?: string | null,
  name: string,
  ranking: number,
  owner?: string | null,
  leagueClubId: string,
};

export type UpdateLeagueInput = {
  id: string,
  name?: string | null,
  ranking?: number | null,
  owner?: string | null,
  leagueClubId?: string | null,
};

export type DeleteLeagueInput = {
  id?: string | null,
};

export type CreateTeamInput = {
  id?: string | null,
  leagueId: string,
  name: string,
  contact: string,
  owner?: string | null,
  teamLeagueId?: string | null,
  teamClubId?: string | null,
};

export type UpdateTeamInput = {
  id: string,
  leagueId?: string | null,
  name?: string | null,
  contact?: string | null,
  owner?: string | null,
  teamLeagueId?: string | null,
  teamClubId?: string | null,
};

export type DeleteTeamInput = {
  id?: string | null,
};

export type CreateAthleteInput = {
  id?: string | null,
  name: string,
  email?: string | null,
  phone?: string | null,
  athleteTeamsId?: string | null,
};

export type UpdateAthleteInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  athleteTeamsId?: string | null,
};

export type DeleteAthleteInput = {
  id?: string | null,
};

export type CreateRefereeInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  street?: string | null,
  streetNumber?: number | null,
  streetNumberAddition?: string | null,
  zipCode?: string | null,
  city: string,
  email?: string | null,
  phone?: string | null,
  refereeClubId?: string | null,
};

export type UpdateRefereeInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  street?: string | null,
  streetNumber?: number | null,
  streetNumberAddition?: string | null,
  zipCode?: string | null,
  city?: string | null,
  email?: string | null,
  phone?: string | null,
  refereeClubId?: string | null,
};

export type DeleteRefereeInput = {
  id?: string | null,
};

export type CreateClubInput = {
  id?: string | null,
  name: string,
  street?: string | null,
  streetNumber?: string | null,
  streetNumberAddition?: string | null,
  zipCode?: string | null,
  country: string,
  contact: string,
  email?: string | null,
  phone?: string | null,
};

export type UpdateClubInput = {
  id: string,
  name?: string | null,
  street?: string | null,
  streetNumber?: string | null,
  streetNumberAddition?: string | null,
  zipCode?: string | null,
  country?: string | null,
  contact?: string | null,
  email?: string | null,
  phone?: string | null,
};

export type DeleteClubInput = {
  id?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDFilterInput | null,
  gameDay?: ModelStringFilterInput | null,
  scoreHome?: ModelIntFilterInput | null,
  scoreAway?: ModelIntFilterInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelIDFilterInput = {
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

export type ModelStringFilterInput = {
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

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStandingFilterInput = {
  id?: ModelIDFilterInput | null,
  team?: ModelStringFilterInput | null,
  matchPlayed?: ModelIntFilterInput | null,
  win?: ModelIntFilterInput | null,
  draw?: ModelIntFilterInput | null,
  loses?: ModelIntFilterInput | null,
  goalsFor?: ModelIntFilterInput | null,
  goalsAgainst?: ModelIntFilterInput | null,
  goalDifference?: ModelIntFilterInput | null,
  points?: ModelIntFilterInput | null,
  lastResults?: ModelStringFilterInput | null,
  and?: Array< ModelStandingFilterInput | null > | null,
  or?: Array< ModelStandingFilterInput | null > | null,
  not?: ModelStandingFilterInput | null,
};

export type ModelSportsHallFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  street?: ModelStringFilterInput | null,
  streetNumber?: ModelIntFilterInput | null,
  streetNumberAddition?: ModelStringFilterInput | null,
  zipCode?: ModelStringFilterInput | null,
  city?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  and?: Array< ModelSportsHallFilterInput | null > | null,
  or?: Array< ModelSportsHallFilterInput | null > | null,
  not?: ModelSportsHallFilterInput | null,
};

export type ModelHallFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelHallFilterInput | null > | null,
  or?: Array< ModelHallFilterInput | null > | null,
  not?: ModelHallFilterInput | null,
};

export type ModelLeagueFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  ranking?: ModelIntFilterInput | null,
  owner?: ModelStringFilterInput | null,
  and?: Array< ModelLeagueFilterInput | null > | null,
  or?: Array< ModelLeagueFilterInput | null > | null,
  not?: ModelLeagueFilterInput | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDFilterInput | null,
  leagueId?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  contact?: ModelStringFilterInput | null,
  owner?: ModelStringFilterInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelAthleteFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  and?: Array< ModelAthleteFilterInput | null > | null,
  or?: Array< ModelAthleteFilterInput | null > | null,
  not?: ModelAthleteFilterInput | null,
};

export type ModelRefereeFilterInput = {
  id?: ModelIDFilterInput | null,
  firstName?: ModelStringFilterInput | null,
  lastName?: ModelStringFilterInput | null,
  street?: ModelStringFilterInput | null,
  streetNumber?: ModelIntFilterInput | null,
  streetNumberAddition?: ModelStringFilterInput | null,
  zipCode?: ModelStringFilterInput | null,
  city?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  and?: Array< ModelRefereeFilterInput | null > | null,
  or?: Array< ModelRefereeFilterInput | null > | null,
  not?: ModelRefereeFilterInput | null,
};

export type ModelClubFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  street?: ModelStringFilterInput | null,
  streetNumber?: ModelStringFilterInput | null,
  streetNumberAddition?: ModelStringFilterInput | null,
  zipCode?: ModelStringFilterInput | null,
  country?: ModelStringFilterInput | null,
  contact?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  and?: Array< ModelClubFilterInput | null > | null,
  or?: Array< ModelClubFilterInput | null > | null,
  not?: ModelClubFilterInput | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    gameDay: string,
    homeTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    awayTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    scoreHome: number | null,
    scoreAway: number | null,
    sportshall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
    hall:  {
      __typename: "Hall",
      id: string,
      name: string,
      sportsHall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
    },
    referee:  {
      __typename: "Referee",
      id: string,
      firstName: string,
      lastName: string,
      street: string | null,
      streetNumber: number | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      city: string,
      email: string | null,
      phone: string | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    gameDay: string,
    homeTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    awayTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    scoreHome: number | null,
    scoreAway: number | null,
    sportshall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
    hall:  {
      __typename: "Hall",
      id: string,
      name: string,
      sportsHall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
    },
    referee:  {
      __typename: "Referee",
      id: string,
      firstName: string,
      lastName: string,
      street: string | null,
      streetNumber: number | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      city: string,
      email: string | null,
      phone: string | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    gameDay: string,
    homeTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    awayTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    scoreHome: number | null,
    scoreAway: number | null,
    sportshall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
    hall:  {
      __typename: "Hall",
      id: string,
      name: string,
      sportsHall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
    },
    referee:  {
      __typename: "Referee",
      id: string,
      firstName: string,
      lastName: string,
      street: string | null,
      streetNumber: number | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      city: string,
      email: string | null,
      phone: string | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateStandingMutationVariables = {
  input: CreateStandingInput,
};

export type CreateStandingMutation = {
  createStanding:  {
    __typename: "Standing",
    id: string,
    team: string,
    matchPlayed: number | null,
    win: number | null,
    draw: number | null,
    loses: number | null,
    goalsFor: number | null,
    goalsAgainst: number | null,
    goalDifference: number | null,
    points: number | null,
    lastResults: string | null,
  } | null,
};

export type UpdateStandingMutationVariables = {
  input: UpdateStandingInput,
};

export type UpdateStandingMutation = {
  updateStanding:  {
    __typename: "Standing",
    id: string,
    team: string,
    matchPlayed: number | null,
    win: number | null,
    draw: number | null,
    loses: number | null,
    goalsFor: number | null,
    goalsAgainst: number | null,
    goalDifference: number | null,
    points: number | null,
    lastResults: string | null,
  } | null,
};

export type DeleteStandingMutationVariables = {
  input: DeleteStandingInput,
};

export type DeleteStandingMutation = {
  deleteStanding:  {
    __typename: "Standing",
    id: string,
    team: string,
    matchPlayed: number | null,
    win: number | null,
    draw: number | null,
    loses: number | null,
    goalsFor: number | null,
    goalsAgainst: number | null,
    goalDifference: number | null,
    points: number | null,
    lastResults: string | null,
  } | null,
};

export type CreateSportsHallMutationVariables = {
  input: CreateSportsHallInput,
};

export type CreateSportsHallMutation = {
  createSportsHall:  {
    __typename: "SportsHall",
    id: string,
    name: string,
    street: string,
    streetNumber: number,
    streetNumberAddition: string | null,
    zipCode: string,
    city: string,
    phone: string | null,
    halls:  {
      __typename: "ModelHallConnection",
      items:  Array< {
        __typename: "Hall",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateSportsHallMutationVariables = {
  input: UpdateSportsHallInput,
};

export type UpdateSportsHallMutation = {
  updateSportsHall:  {
    __typename: "SportsHall",
    id: string,
    name: string,
    street: string,
    streetNumber: number,
    streetNumberAddition: string | null,
    zipCode: string,
    city: string,
    phone: string | null,
    halls:  {
      __typename: "ModelHallConnection",
      items:  Array< {
        __typename: "Hall",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteSportsHallMutationVariables = {
  input: DeleteSportsHallInput,
};

export type DeleteSportsHallMutation = {
  deleteSportsHall:  {
    __typename: "SportsHall",
    id: string,
    name: string,
    street: string,
    streetNumber: number,
    streetNumberAddition: string | null,
    zipCode: string,
    city: string,
    phone: string | null,
    halls:  {
      __typename: "ModelHallConnection",
      items:  Array< {
        __typename: "Hall",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateHallMutationVariables = {
  input: CreateHallInput,
};

export type CreateHallMutation = {
  createHall:  {
    __typename: "Hall",
    id: string,
    name: string,
    sportsHall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
  } | null,
};

export type UpdateHallMutationVariables = {
  input: UpdateHallInput,
};

export type UpdateHallMutation = {
  updateHall:  {
    __typename: "Hall",
    id: string,
    name: string,
    sportsHall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
  } | null,
};

export type DeleteHallMutationVariables = {
  input: DeleteHallInput,
};

export type DeleteHallMutation = {
  deleteHall:  {
    __typename: "Hall",
    id: string,
    name: string,
    sportsHall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
  } | null,
};

export type CreateLeagueMutationVariables = {
  input: CreateLeagueInput,
};

export type CreateLeagueMutation = {
  createLeague:  {
    __typename: "League",
    id: string,
    name: string,
    ranking: number,
    owner: string | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateLeagueMutationVariables = {
  input: UpdateLeagueInput,
};

export type UpdateLeagueMutation = {
  updateLeague:  {
    __typename: "League",
    id: string,
    name: string,
    ranking: number,
    owner: string | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteLeagueMutationVariables = {
  input: DeleteLeagueInput,
};

export type DeleteLeagueMutation = {
  deleteLeague:  {
    __typename: "League",
    id: string,
    name: string,
    ranking: number,
    owner: string | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
};

export type CreateTeamMutation = {
  createTeam:  {
    __typename: "Team",
    id: string,
    leagueId: string,
    name: string,
    contact: string,
    owner: string | null,
    league:  {
      __typename: "League",
      id: string,
      name: string,
      ranking: number,
      owner: string | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null,
    athletes:  {
      __typename: "ModelAthleteConnection",
      items:  Array< {
        __typename: "Athlete",
        id: string,
        name: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
};

export type UpdateTeamMutation = {
  updateTeam:  {
    __typename: "Team",
    id: string,
    leagueId: string,
    name: string,
    contact: string,
    owner: string | null,
    league:  {
      __typename: "League",
      id: string,
      name: string,
      ranking: number,
      owner: string | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null,
    athletes:  {
      __typename: "ModelAthleteConnection",
      items:  Array< {
        __typename: "Athlete",
        id: string,
        name: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
};

export type DeleteTeamMutation = {
  deleteTeam:  {
    __typename: "Team",
    id: string,
    leagueId: string,
    name: string,
    contact: string,
    owner: string | null,
    league:  {
      __typename: "League",
      id: string,
      name: string,
      ranking: number,
      owner: string | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null,
    athletes:  {
      __typename: "ModelAthleteConnection",
      items:  Array< {
        __typename: "Athlete",
        id: string,
        name: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateAthleteMutationVariables = {
  input: CreateAthleteInput,
};

export type CreateAthleteMutation = {
  createAthlete:  {
    __typename: "Athlete",
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    teams:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateAthleteMutationVariables = {
  input: UpdateAthleteInput,
};

export type UpdateAthleteMutation = {
  updateAthlete:  {
    __typename: "Athlete",
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    teams:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteAthleteMutationVariables = {
  input: DeleteAthleteInput,
};

export type DeleteAthleteMutation = {
  deleteAthlete:  {
    __typename: "Athlete",
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    teams:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateRefereeMutationVariables = {
  input: CreateRefereeInput,
};

export type CreateRefereeMutation = {
  createReferee:  {
    __typename: "Referee",
    id: string,
    firstName: string,
    lastName: string,
    street: string | null,
    streetNumber: number | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    city: string,
    email: string | null,
    phone: string | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateRefereeMutationVariables = {
  input: UpdateRefereeInput,
};

export type UpdateRefereeMutation = {
  updateReferee:  {
    __typename: "Referee",
    id: string,
    firstName: string,
    lastName: string,
    street: string | null,
    streetNumber: number | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    city: string,
    email: string | null,
    phone: string | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteRefereeMutationVariables = {
  input: DeleteRefereeInput,
};

export type DeleteRefereeMutation = {
  deleteReferee:  {
    __typename: "Referee",
    id: string,
    firstName: string,
    lastName: string,
    street: string | null,
    streetNumber: number | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    city: string,
    email: string | null,
    phone: string | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateClubMutationVariables = {
  input: CreateClubInput,
};

export type CreateClubMutation = {
  createClub:  {
    __typename: "Club",
    id: string,
    name: string,
    street: string | null,
    streetNumber: string | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    country: string,
    contact: string,
    email: string | null,
    phone: string | null,
    sportsHalls:  {
      __typename: "ModelSportsHallConnection",
      items:  Array< {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    leagues:  {
      __typename: "ModelLeagueConnection",
      items:  Array< {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    referees:  {
      __typename: "ModelRefereeConnection",
      items:  Array< {
        __typename: "Referee",
        id: string,
        firstName: string,
        lastName: string,
        street: string | null,
        streetNumber: number | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        city: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateClubMutationVariables = {
  input: UpdateClubInput,
};

export type UpdateClubMutation = {
  updateClub:  {
    __typename: "Club",
    id: string,
    name: string,
    street: string | null,
    streetNumber: string | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    country: string,
    contact: string,
    email: string | null,
    phone: string | null,
    sportsHalls:  {
      __typename: "ModelSportsHallConnection",
      items:  Array< {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    leagues:  {
      __typename: "ModelLeagueConnection",
      items:  Array< {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    referees:  {
      __typename: "ModelRefereeConnection",
      items:  Array< {
        __typename: "Referee",
        id: string,
        firstName: string,
        lastName: string,
        street: string | null,
        streetNumber: number | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        city: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteClubMutationVariables = {
  input: DeleteClubInput,
};

export type DeleteClubMutation = {
  deleteClub:  {
    __typename: "Club",
    id: string,
    name: string,
    street: string | null,
    streetNumber: string | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    country: string,
    contact: string,
    email: string | null,
    phone: string | null,
    sportsHalls:  {
      __typename: "ModelSportsHallConnection",
      items:  Array< {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    leagues:  {
      __typename: "ModelLeagueConnection",
      items:  Array< {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    referees:  {
      __typename: "ModelRefereeConnection",
      items:  Array< {
        __typename: "Referee",
        id: string,
        firstName: string,
        lastName: string,
        street: string | null,
        streetNumber: number | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        city: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    gameDay: string,
    homeTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    awayTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    scoreHome: number | null,
    scoreAway: number | null,
    sportshall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
    hall:  {
      __typename: "Hall",
      id: string,
      name: string,
      sportsHall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
    },
    referee:  {
      __typename: "Referee",
      id: string,
      firstName: string,
      lastName: string,
      street: string | null,
      streetNumber: number | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      city: string,
      email: string | null,
      phone: string | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      gameDay: string,
      homeTeam:  {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      },
      awayTeam:  {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      },
      scoreHome: number | null,
      scoreAway: number | null,
      sportshall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
      hall:  {
        __typename: "Hall",
        id: string,
        name: string,
      },
      referee:  {
        __typename: "Referee",
        id: string,
        firstName: string,
        lastName: string,
        street: string | null,
        streetNumber: number | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        city: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetStandingQueryVariables = {
  id: string,
};

export type GetStandingQuery = {
  getStanding:  {
    __typename: "Standing",
    id: string,
    team: string,
    matchPlayed: number | null,
    win: number | null,
    draw: number | null,
    loses: number | null,
    goalsFor: number | null,
    goalsAgainst: number | null,
    goalDifference: number | null,
    points: number | null,
    lastResults: string | null,
  } | null,
};

export type ListStandingsQueryVariables = {
  filter?: ModelStandingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStandingsQuery = {
  listStandings:  {
    __typename: "ModelStandingConnection",
    items:  Array< {
      __typename: "Standing",
      id: string,
      team: string,
      matchPlayed: number | null,
      win: number | null,
      draw: number | null,
      loses: number | null,
      goalsFor: number | null,
      goalsAgainst: number | null,
      goalDifference: number | null,
      points: number | null,
      lastResults: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSportsHallQueryVariables = {
  id: string,
};

export type GetSportsHallQuery = {
  getSportsHall:  {
    __typename: "SportsHall",
    id: string,
    name: string,
    street: string,
    streetNumber: number,
    streetNumberAddition: string | null,
    zipCode: string,
    city: string,
    phone: string | null,
    halls:  {
      __typename: "ModelHallConnection",
      items:  Array< {
        __typename: "Hall",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListSportsHallsQueryVariables = {
  filter?: ModelSportsHallFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSportsHallsQuery = {
  listSportsHalls:  {
    __typename: "ModelSportsHallConnection",
    items:  Array< {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetHallQueryVariables = {
  id: string,
};

export type GetHallQuery = {
  getHall:  {
    __typename: "Hall",
    id: string,
    name: string,
    sportsHall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
  } | null,
};

export type ListHallsQueryVariables = {
  filter?: ModelHallFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHallsQuery = {
  listHalls:  {
    __typename: "ModelHallConnection",
    items:  Array< {
      __typename: "Hall",
      id: string,
      name: string,
      sportsHall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLeagueQueryVariables = {
  id: string,
};

export type GetLeagueQuery = {
  getLeague:  {
    __typename: "League",
    id: string,
    name: string,
    ranking: number,
    owner: string | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListLeaguesQueryVariables = {
  filter?: ModelLeagueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeaguesQuery = {
  listLeagues:  {
    __typename: "ModelLeagueConnection",
    items:  Array< {
      __typename: "League",
      id: string,
      name: string,
      ranking: number,
      owner: string | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam:  {
    __typename: "Team",
    id: string,
    leagueId: string,
    name: string,
    contact: string,
    owner: string | null,
    league:  {
      __typename: "League",
      id: string,
      name: string,
      ranking: number,
      owner: string | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null,
    athletes:  {
      __typename: "ModelAthleteConnection",
      items:  Array< {
        __typename: "Athlete",
        id: string,
        name: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAthleteQueryVariables = {
  id: string,
};

export type GetAthleteQuery = {
  getAthlete:  {
    __typename: "Athlete",
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    teams:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListAthletesQueryVariables = {
  filter?: ModelAthleteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAthletesQuery = {
  listAthletes:  {
    __typename: "ModelAthleteConnection",
    items:  Array< {
      __typename: "Athlete",
      id: string,
      name: string,
      email: string | null,
      phone: string | null,
      teams:  {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRefereeQueryVariables = {
  id: string,
};

export type GetRefereeQuery = {
  getReferee:  {
    __typename: "Referee",
    id: string,
    firstName: string,
    lastName: string,
    street: string | null,
    streetNumber: number | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    city: string,
    email: string | null,
    phone: string | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListRefereesQueryVariables = {
  filter?: ModelRefereeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRefereesQuery = {
  listReferees:  {
    __typename: "ModelRefereeConnection",
    items:  Array< {
      __typename: "Referee",
      id: string,
      firstName: string,
      lastName: string,
      street: string | null,
      streetNumber: number | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      city: string,
      email: string | null,
      phone: string | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListClubsQueryVariables = {
  filter?: ModelClubFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClubsQuery = {
  listClubs:  {
    __typename: "ModelClubConnection",
    items:  Array< {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetClubQueryVariables = {
  id: string,
};

export type GetClubQuery = {
  getClub:  {
    __typename: "Club",
    id: string,
    name: string,
    street: string | null,
    streetNumber: string | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    country: string,
    contact: string,
    email: string | null,
    phone: string | null,
    sportsHalls:  {
      __typename: "ModelSportsHallConnection",
      items:  Array< {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    leagues:  {
      __typename: "ModelLeagueConnection",
      items:  Array< {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    referees:  {
      __typename: "ModelRefereeConnection",
      items:  Array< {
        __typename: "Referee",
        id: string,
        firstName: string,
        lastName: string,
        street: string | null,
        streetNumber: number | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        city: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    gameDay: string,
    homeTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    awayTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    scoreHome: number | null,
    scoreAway: number | null,
    sportshall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
    hall:  {
      __typename: "Hall",
      id: string,
      name: string,
      sportsHall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
    },
    referee:  {
      __typename: "Referee",
      id: string,
      firstName: string,
      lastName: string,
      street: string | null,
      streetNumber: number | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      city: string,
      email: string | null,
      phone: string | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    gameDay: string,
    homeTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    awayTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    scoreHome: number | null,
    scoreAway: number | null,
    sportshall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
    hall:  {
      __typename: "Hall",
      id: string,
      name: string,
      sportsHall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
    },
    referee:  {
      __typename: "Referee",
      id: string,
      firstName: string,
      lastName: string,
      street: string | null,
      streetNumber: number | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      city: string,
      email: string | null,
      phone: string | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    gameDay: string,
    homeTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    awayTeam:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    },
    scoreHome: number | null,
    scoreAway: number | null,
    sportshall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
    hall:  {
      __typename: "Hall",
      id: string,
      name: string,
      sportsHall:  {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      },
    },
    referee:  {
      __typename: "Referee",
      id: string,
      firstName: string,
      lastName: string,
      street: string | null,
      streetNumber: number | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      city: string,
      email: string | null,
      phone: string | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateStandingSubscription = {
  onCreateStanding:  {
    __typename: "Standing",
    id: string,
    team: string,
    matchPlayed: number | null,
    win: number | null,
    draw: number | null,
    loses: number | null,
    goalsFor: number | null,
    goalsAgainst: number | null,
    goalDifference: number | null,
    points: number | null,
    lastResults: string | null,
  } | null,
};

export type OnUpdateStandingSubscription = {
  onUpdateStanding:  {
    __typename: "Standing",
    id: string,
    team: string,
    matchPlayed: number | null,
    win: number | null,
    draw: number | null,
    loses: number | null,
    goalsFor: number | null,
    goalsAgainst: number | null,
    goalDifference: number | null,
    points: number | null,
    lastResults: string | null,
  } | null,
};

export type OnDeleteStandingSubscription = {
  onDeleteStanding:  {
    __typename: "Standing",
    id: string,
    team: string,
    matchPlayed: number | null,
    win: number | null,
    draw: number | null,
    loses: number | null,
    goalsFor: number | null,
    goalsAgainst: number | null,
    goalDifference: number | null,
    points: number | null,
    lastResults: string | null,
  } | null,
};

export type OnCreateSportsHallSubscription = {
  onCreateSportsHall:  {
    __typename: "SportsHall",
    id: string,
    name: string,
    street: string,
    streetNumber: number,
    streetNumberAddition: string | null,
    zipCode: string,
    city: string,
    phone: string | null,
    halls:  {
      __typename: "ModelHallConnection",
      items:  Array< {
        __typename: "Hall",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateSportsHallSubscription = {
  onUpdateSportsHall:  {
    __typename: "SportsHall",
    id: string,
    name: string,
    street: string,
    streetNumber: number,
    streetNumberAddition: string | null,
    zipCode: string,
    city: string,
    phone: string | null,
    halls:  {
      __typename: "ModelHallConnection",
      items:  Array< {
        __typename: "Hall",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteSportsHallSubscription = {
  onDeleteSportsHall:  {
    __typename: "SportsHall",
    id: string,
    name: string,
    street: string,
    streetNumber: number,
    streetNumberAddition: string | null,
    zipCode: string,
    city: string,
    phone: string | null,
    halls:  {
      __typename: "ModelHallConnection",
      items:  Array< {
        __typename: "Hall",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateHallSubscription = {
  onCreateHall:  {
    __typename: "Hall",
    id: string,
    name: string,
    sportsHall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
  } | null,
};

export type OnUpdateHallSubscription = {
  onUpdateHall:  {
    __typename: "Hall",
    id: string,
    name: string,
    sportsHall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
  } | null,
};

export type OnDeleteHallSubscription = {
  onDeleteHall:  {
    __typename: "Hall",
    id: string,
    name: string,
    sportsHall:  {
      __typename: "SportsHall",
      id: string,
      name: string,
      street: string,
      streetNumber: number,
      streetNumberAddition: string | null,
      zipCode: string,
      city: string,
      phone: string | null,
      halls:  {
        __typename: "ModelHallConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    },
  } | null,
};

export type OnCreateLeagueSubscription = {
  onCreateLeague:  {
    __typename: "League",
    id: string,
    name: string,
    ranking: number,
    owner: string | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateLeagueSubscription = {
  onUpdateLeague:  {
    __typename: "League",
    id: string,
    name: string,
    ranking: number,
    owner: string | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteLeagueSubscription = {
  onDeleteLeague:  {
    __typename: "League",
    id: string,
    name: string,
    ranking: number,
    owner: string | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam:  {
    __typename: "Team",
    id: string,
    leagueId: string,
    name: string,
    contact: string,
    owner: string | null,
    league:  {
      __typename: "League",
      id: string,
      name: string,
      ranking: number,
      owner: string | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null,
    athletes:  {
      __typename: "ModelAthleteConnection",
      items:  Array< {
        __typename: "Athlete",
        id: string,
        name: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam:  {
    __typename: "Team",
    id: string,
    leagueId: string,
    name: string,
    contact: string,
    owner: string | null,
    league:  {
      __typename: "League",
      id: string,
      name: string,
      ranking: number,
      owner: string | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null,
    athletes:  {
      __typename: "ModelAthleteConnection",
      items:  Array< {
        __typename: "Athlete",
        id: string,
        name: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam:  {
    __typename: "Team",
    id: string,
    leagueId: string,
    name: string,
    contact: string,
    owner: string | null,
    league:  {
      __typename: "League",
      id: string,
      name: string,
      ranking: number,
      owner: string | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      },
    } | null,
    athletes:  {
      __typename: "ModelAthleteConnection",
      items:  Array< {
        __typename: "Athlete",
        id: string,
        name: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateAthleteSubscription = {
  onCreateAthlete:  {
    __typename: "Athlete",
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    teams:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateAthleteSubscription = {
  onUpdateAthlete:  {
    __typename: "Athlete",
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    teams:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteAthleteSubscription = {
  onDeleteAthlete:  {
    __typename: "Athlete",
    id: string,
    name: string,
    email: string | null,
    phone: string | null,
    teams:  {
      __typename: "Team",
      id: string,
      leagueId: string,
      name: string,
      contact: string,
      owner: string | null,
      league:  {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null,
      athletes:  {
        __typename: "ModelAthleteConnection",
        nextToken: string | null,
      } | null,
      club:  {
        __typename: "Club",
        id: string,
        name: string,
        street: string | null,
        streetNumber: string | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        country: string,
        contact: string,
        email: string | null,
        phone: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateRefereeSubscription = {
  onCreateReferee:  {
    __typename: "Referee",
    id: string,
    firstName: string,
    lastName: string,
    street: string | null,
    streetNumber: number | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    city: string,
    email: string | null,
    phone: string | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateRefereeSubscription = {
  onUpdateReferee:  {
    __typename: "Referee",
    id: string,
    firstName: string,
    lastName: string,
    street: string | null,
    streetNumber: number | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    city: string,
    email: string | null,
    phone: string | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteRefereeSubscription = {
  onDeleteReferee:  {
    __typename: "Referee",
    id: string,
    firstName: string,
    lastName: string,
    street: string | null,
    streetNumber: number | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    city: string,
    email: string | null,
    phone: string | null,
    club:  {
      __typename: "Club",
      id: string,
      name: string,
      street: string | null,
      streetNumber: string | null,
      streetNumberAddition: string | null,
      zipCode: string | null,
      country: string,
      contact: string,
      email: string | null,
      phone: string | null,
      sportsHalls:  {
        __typename: "ModelSportsHallConnection",
        nextToken: string | null,
      } | null,
      leagues:  {
        __typename: "ModelLeagueConnection",
        nextToken: string | null,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      referees:  {
        __typename: "ModelRefereeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateClubSubscription = {
  onCreateClub:  {
    __typename: "Club",
    id: string,
    name: string,
    street: string | null,
    streetNumber: string | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    country: string,
    contact: string,
    email: string | null,
    phone: string | null,
    sportsHalls:  {
      __typename: "ModelSportsHallConnection",
      items:  Array< {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    leagues:  {
      __typename: "ModelLeagueConnection",
      items:  Array< {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    referees:  {
      __typename: "ModelRefereeConnection",
      items:  Array< {
        __typename: "Referee",
        id: string,
        firstName: string,
        lastName: string,
        street: string | null,
        streetNumber: number | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        city: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateClubSubscription = {
  onUpdateClub:  {
    __typename: "Club",
    id: string,
    name: string,
    street: string | null,
    streetNumber: string | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    country: string,
    contact: string,
    email: string | null,
    phone: string | null,
    sportsHalls:  {
      __typename: "ModelSportsHallConnection",
      items:  Array< {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    leagues:  {
      __typename: "ModelLeagueConnection",
      items:  Array< {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    referees:  {
      __typename: "ModelRefereeConnection",
      items:  Array< {
        __typename: "Referee",
        id: string,
        firstName: string,
        lastName: string,
        street: string | null,
        streetNumber: number | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        city: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteClubSubscription = {
  onDeleteClub:  {
    __typename: "Club",
    id: string,
    name: string,
    street: string | null,
    streetNumber: string | null,
    streetNumberAddition: string | null,
    zipCode: string | null,
    country: string,
    contact: string,
    email: string | null,
    phone: string | null,
    sportsHalls:  {
      __typename: "ModelSportsHallConnection",
      items:  Array< {
        __typename: "SportsHall",
        id: string,
        name: string,
        street: string,
        streetNumber: number,
        streetNumberAddition: string | null,
        zipCode: string,
        city: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    leagues:  {
      __typename: "ModelLeagueConnection",
      items:  Array< {
        __typename: "League",
        id: string,
        name: string,
        ranking: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        leagueId: string,
        name: string,
        contact: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    referees:  {
      __typename: "ModelRefereeConnection",
      items:  Array< {
        __typename: "Referee",
        id: string,
        firstName: string,
        lastName: string,
        street: string | null,
        streetNumber: number | null,
        streetNumberAddition: string | null,
        zipCode: string | null,
        city: string,
        email: string | null,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
