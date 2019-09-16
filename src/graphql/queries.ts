// tslint:disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    homeTeam {
      id
      division
      name
      contact
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
      owner
      active
      createdAt
      lastUpdated
      deletedAt
    }
    scoreHome
    scoreAway
    awayTeam {
      id
      division
      name
      contact
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
      owner
      active
      createdAt
      lastUpdated
      deletedAt
    }
    division
    gameDay
    location
    referee {
      id
      name
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
        division
        name
        contact
        owner
        active
        createdAt
        lastUpdated
        deletedAt
      }
      scoreHome
      scoreAway
      awayTeam {
        id
        division
        name
        contact
        owner
        active
        createdAt
        lastUpdated
        deletedAt
      }
      division
      gameDay
      location
      referee {
        id
        name
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
export const getLeague = `query GetLeague($id: ID!) {
  getLeague(id: $id) {
    id
    name
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
    owner
    active
    createdAt
    lastUpdated
    deletedAt
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
      owner
      active
      createdAt
      lastUpdated
      deletedAt
    }
    nextToken
  }
}
`;
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    division
    name
    contact
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
    owner
    active
    createdAt
    lastUpdated
    deletedAt
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
      division
      name
      contact
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
      owner
      active
      createdAt
      lastUpdated
      deletedAt
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
      division
      name
      contact
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
      owner
      active
      createdAt
      lastUpdated
      deletedAt
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
        division
        name
        contact
        owner
        active
        createdAt
        lastUpdated
        deletedAt
      }
    }
    nextToken
  }
}
`;
export const getReferee = `query GetReferee($id: ID!) {
  getReferee(id: $id) {
    id
    name
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
      name
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
    leagues {
      items {
        id
        name
        owner
        active
        createdAt
        lastUpdated
        deletedAt
      }
      nextToken
    }
    teams {
      items {
        id
        division
        name
        contact
        owner
        active
        createdAt
        lastUpdated
        deletedAt
      }
      nextToken
    }
    referees {
      items {
        id
        name
        email
        phone
      }
      nextToken
    }
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
