// tslint:disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    homeTeam {
      id
      leagueId
      name
      contact
      owner
      league {
        id
        name
        ranking
        owner
      }
      athletes {
        nextToken
      }
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
    scoreHome
    scoreAway
    awayTeam {
      id
      leagueId
      name
      contact
      owner
      league {
        id
        name
        ranking
        owner
      }
      athletes {
        nextToken
      }
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
    gameDay
    location
    referee {
      id
      firstName
      lastName
      street
      streetNumber
      streetNumberAddition
      zipCode
      city
      email
      phone
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      homeTeam {
        id
        leagueId
        name
        contact
        owner
      }
      scoreHome
      scoreAway
      awayTeam {
        id
        leagueId
        name
        contact
        owner
      }
      gameDay
      location
      referee {
        id
        firstName
        lastName
        street
        streetNumber
        streetNumberAddition
        zipCode
        city
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const getStanding = `query GetStanding($id: ID!) {
  getStanding(id: $id) {
    id
    team
    matchPlayed
    win
    draw
    loses
    goalsFor
    goalsAgainst
    goalDifference
    points
    lastResults
  }
}
`;
export const listStandings = `query ListStandings(
  $filter: ModelStandingFilterInput
  $limit: Int
  $nextToken: String
) {
  listStandings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      team
      matchPlayed
      win
      draw
      loses
      goalsFor
      goalsAgainst
      goalDifference
      points
      lastResults
    }
    nextToken
  }
}
`;
export const getSportsHall = `query GetSportsHall($id: ID!) {
  getSportsHall(id: $id) {
    id
    name
    street
    streetNumber
    streetNumberAddition
    zipCode
    city
    phone
    halls {
      items {
        id
        name
      }
      nextToken
    }
    club {
      id
      name
      street
      streetNumber
      streetNumberAddition
      zipCode
      country
      contact
      email
      phone
      sportsHalls {
        nextToken
      }
      leagues {
        nextToken
      }
      teams {
        nextToken
      }
      referees {
        nextToken
      }
    }
  }
}
`;
export const listSportsHalls = `query ListSportsHalls(
  $filter: ModelSportsHallFilterInput
  $limit: Int
  $nextToken: String
) {
  listSportsHalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      street
      streetNumber
      streetNumberAddition
      zipCode
      city
      phone
      halls {
        nextToken
      }
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const getHall = `query GetHall($id: ID!) {
  getHall(id: $id) {
    id
    name
    sportsHall {
      id
      name
      street
      streetNumber
      streetNumberAddition
      zipCode
      city
      phone
      halls {
        nextToken
      }
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
  }
}
`;
export const listHalls = `query ListHalls(
  $filter: ModelHallFilterInput
  $limit: Int
  $nextToken: String
) {
  listHalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sportsHall {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        city
        phone
      }
    }
    nextToken
  }
}
`;
export const getLeague = `query GetLeague($id: ID!) {
  getLeague(id: $id) {
    id
    name
    ranking
    owner
    teams {
      items {
        id
        leagueId
        name
        contact
        owner
      }
      nextToken
    }
    club {
      id
      name
      street
      streetNumber
      streetNumberAddition
      zipCode
      country
      contact
      email
      phone
      sportsHalls {
        nextToken
      }
      leagues {
        nextToken
      }
      teams {
        nextToken
      }
      referees {
        nextToken
      }
    }
  }
}
`;
export const listLeagues = `query ListLeagues(
  $filter: ModelLeagueFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      ranking
      owner
      teams {
        nextToken
      }
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    leagueId
    name
    contact
    owner
    league {
      id
      name
      ranking
      owner
      teams {
        nextToken
      }
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
    athletes {
      items {
        id
        name
        email
        phone
      }
      nextToken
    }
    club {
      id
      name
      street
      streetNumber
      streetNumberAddition
      zipCode
      country
      contact
      email
      phone
      sportsHalls {
        nextToken
      }
      leagues {
        nextToken
      }
      teams {
        nextToken
      }
      referees {
        nextToken
      }
    }
  }
}
`;
export const listTeams = `query ListTeams(
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      leagueId
      name
      contact
      owner
      league {
        id
        name
        ranking
        owner
      }
      athletes {
        nextToken
      }
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const getAthlete = `query GetAthlete($id: ID!) {
  getAthlete(id: $id) {
    id
    name
    email
    phone
    teams {
      id
      leagueId
      name
      contact
      owner
      league {
        id
        name
        ranking
        owner
      }
      athletes {
        nextToken
      }
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
  }
}
`;
export const listAthletes = `query ListAthletes(
  $filter: ModelAthleteFilterInput
  $limit: Int
  $nextToken: String
) {
  listAthletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      phone
      teams {
        id
        leagueId
        name
        contact
        owner
      }
    }
    nextToken
  }
}
`;
export const getReferee = `query GetReferee($id: ID!) {
  getReferee(id: $id) {
    id
    firstName
    lastName
    street
    streetNumber
    streetNumberAddition
    zipCode
    city
    email
    phone
    club {
      id
      name
      street
      streetNumber
      streetNumberAddition
      zipCode
      country
      contact
      email
      phone
      sportsHalls {
        nextToken
      }
      leagues {
        nextToken
      }
      teams {
        nextToken
      }
      referees {
        nextToken
      }
    }
  }
}
`;
export const listReferees = `query ListReferees(
  $filter: ModelRefereeFilterInput
  $limit: Int
  $nextToken: String
) {
  listReferees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      street
      streetNumber
      streetNumberAddition
      zipCode
      city
      email
      phone
      club {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        country
        contact
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const listClubs = `query ListClubs(
  $filter: ModelClubFilterInput
  $limit: Int
  $nextToken: String
) {
  listClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      street
      streetNumber
      streetNumberAddition
      zipCode
      country
      contact
      email
      phone
      sportsHalls {
        nextToken
      }
      leagues {
        nextToken
      }
      teams {
        nextToken
      }
      referees {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getClub = `query GetClub($id: ID!) {
  getClub(id: $id) {
    id
    name
    street
    streetNumber
    streetNumberAddition
    zipCode
    country
    contact
    email
    phone
    sportsHalls {
      items {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        city
        phone
      }
      nextToken
    }
    leagues {
      items {
        id
        name
        ranking
        owner
      }
      nextToken
    }
    teams {
      items {
        id
        leagueId
        name
        contact
        owner
      }
      nextToken
    }
    referees {
      items {
        id
        firstName
        lastName
        street
        streetNumber
        streetNumberAddition
        zipCode
        city
        email
        phone
      }
      nextToken
    }
  }
}
`;
