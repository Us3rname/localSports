// tslint:disable
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createSportsHall = `mutation CreateSportsHall($input: CreateSportsHallInput!) {
  createSportsHall(input: $input) {
    id
    name
    street
    zipCode
    city
    phone
    halls {
      id
      name
    }
  }
}
`;
export const updateSportsHall = `mutation UpdateSportsHall($input: UpdateSportsHallInput!) {
  updateSportsHall(input: $input) {
    id
    name
    street
    zipCode
    city
    phone
    halls {
      id
      name
    }
  }
}
`;
export const deleteSportsHall = `mutation DeleteSportsHall($input: DeleteSportsHallInput!) {
  deleteSportsHall(input: $input) {
    id
    name
    street
    zipCode
    city
    phone
    halls {
      id
      name
    }
  }
}
`;
export const createHall = `mutation CreateHall($input: CreateHallInput!) {
  createHall(input: $input) {
    id
    name
  }
}
`;
export const updateHall = `mutation UpdateHall($input: UpdateHallInput!) {
  updateHall(input: $input) {
    id
    name
  }
}
`;
export const deleteHall = `mutation DeleteHall($input: DeleteHallInput!) {
  deleteHall(input: $input) {
    id
    name
  }
}
`;
export const createLeague = `mutation CreateLeague($input: CreateLeagueInput!) {
  createLeague(input: $input) {
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
export const updateTeam = `mutation UpdateTeam($input: UpdateTeamInput!) {
  updateTeam(input: $input) {
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
export const deleteTeam = `mutation DeleteTeam($input: DeleteTeamInput!) {
  deleteTeam(input: $input) {
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
export const createAthlete = `mutation CreateAthlete($input: CreateAthleteInput!) {
  createAthlete(input: $input) {
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
export const updateAthlete = `mutation UpdateAthlete($input: UpdateAthleteInput!) {
  updateAthlete(input: $input) {
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
export const deleteAthlete = `mutation DeleteAthlete($input: DeleteAthleteInput!) {
  deleteAthlete(input: $input) {
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
