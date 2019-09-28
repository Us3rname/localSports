// tslint:disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    homeTeam {
      id
      name
      contact
      owner
      active
      createdAt
      lastUpdated
      deletedAt
      league {
        id
        name
        ranking
        owner
        active
        createdAt
        lastUpdated
        deletedAt
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
      name
      contact
      owner
      active
      createdAt
      lastUpdated
      deletedAt
      league {
        id
        name
        ranking
        owner
        active
        createdAt
        lastUpdated
        deletedAt
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
        name
        contact
        owner
        active
        createdAt
        lastUpdated
        deletedAt
      }
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
    active
    halls {
      items {
        id
        name
        active
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
      active
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
    active
    sportsHall {
      id
      name
      street
      streetNumber
      streetNumberAddition
      zipCode
      city
      phone
      active
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
      active
      sportsHall {
        id
        name
        street
        streetNumber
        streetNumberAddition
        zipCode
        city
        phone
        active
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
    active
    createdAt
    lastUpdated
    deletedAt
    teams {
      items {
        id
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
      active
      createdAt
      lastUpdated
      deletedAt
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
    name
    contact
    owner
    active
    createdAt
    lastUpdated
    deletedAt
    league {
      id
      name
      ranking
      owner
      active
      createdAt
      lastUpdated
      deletedAt
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
      name
      contact
      owner
      active
      createdAt
      lastUpdated
      deletedAt
      league {
        id
        name
        ranking
        owner
        active
        createdAt
        lastUpdated
        deletedAt
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
      name
      contact
      owner
      active
      createdAt
      lastUpdated
      deletedAt
      league {
        id
        name
        ranking
        owner
        active
        createdAt
        lastUpdated
        deletedAt
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
        active
      }
      nextToken
    }
    leagues {
      items {
        id
        name
        ranking
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
