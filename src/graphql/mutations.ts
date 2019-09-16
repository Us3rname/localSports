// tslint:disable
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createStanding = `mutation CreateStanding($input: CreateStandingInput!) {
  createStanding(input: $input) {
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
export const updateStanding = `mutation UpdateStanding($input: UpdateStandingInput!) {
  updateStanding(input: $input) {
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
export const deleteStanding = `mutation DeleteStanding($input: DeleteStandingInput!) {
  deleteStanding(input: $input) {
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
export const createLeague = `mutation CreateLeague($input: CreateLeagueInput!) {
  createLeague(input: $input) {
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
  }
}
`;
export const updateLeague = `mutation UpdateLeague($input: UpdateLeagueInput!) {
  updateLeague(input: $input) {
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
  }
}
`;
export const deleteLeague = `mutation DeleteLeague($input: DeleteLeagueInput!) {
  deleteLeague(input: $input) {
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
  }
}
`;
export const createTeam = `mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
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
export const updateTeam = `mutation UpdateTeam($input: UpdateTeamInput!) {
  updateTeam(input: $input) {
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
export const deleteTeam = `mutation DeleteTeam($input: DeleteTeamInput!) {
  deleteTeam(input: $input) {
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
export const createAthlete = `mutation CreateAthlete($input: CreateAthleteInput!) {
  createAthlete(input: $input) {
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
export const updateAthlete = `mutation UpdateAthlete($input: UpdateAthleteInput!) {
  updateAthlete(input: $input) {
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
export const deleteAthlete = `mutation DeleteAthlete($input: DeleteAthleteInput!) {
  deleteAthlete(input: $input) {
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
export const createReferee = `mutation CreateReferee($input: CreateRefereeInput!) {
  createReferee(input: $input) {
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
export const updateReferee = `mutation UpdateReferee($input: UpdateRefereeInput!) {
  updateReferee(input: $input) {
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
export const deleteReferee = `mutation DeleteReferee($input: DeleteRefereeInput!) {
  deleteReferee(input: $input) {
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
export const createClub = `mutation CreateClub($input: CreateClubInput!) {
  createClub(input: $input) {
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
export const updateClub = `mutation UpdateClub($input: UpdateClubInput!) {
  updateClub(input: $input) {
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
export const deleteClub = `mutation DeleteClub($input: DeleteClubInput!) {
  deleteClub(input: $input) {
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
