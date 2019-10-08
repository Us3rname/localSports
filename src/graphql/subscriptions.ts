// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateStanding = `subscription OnCreateStanding {
  onCreateStanding {
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
export const onUpdateStanding = `subscription OnUpdateStanding {
  onUpdateStanding {
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
export const onDeleteStanding = `subscription OnDeleteStanding {
  onDeleteStanding {
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
export const onCreateSportsHall = `subscription OnCreateSportsHall {
  onCreateSportsHall {
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
export const onUpdateSportsHall = `subscription OnUpdateSportsHall {
  onUpdateSportsHall {
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
export const onDeleteSportsHall = `subscription OnDeleteSportsHall {
  onDeleteSportsHall {
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
export const onCreateHall = `subscription OnCreateHall {
  onCreateHall {
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
export const onUpdateHall = `subscription OnUpdateHall {
  onUpdateHall {
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
export const onDeleteHall = `subscription OnDeleteHall {
  onDeleteHall {
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
export const onCreateLeague = `subscription OnCreateLeague {
  onCreateLeague {
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
export const onUpdateLeague = `subscription OnUpdateLeague {
  onUpdateLeague {
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
export const onDeleteLeague = `subscription OnDeleteLeague {
  onDeleteLeague {
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
export const onCreateTeam = `subscription OnCreateTeam {
  onCreateTeam {
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
export const onUpdateTeam = `subscription OnUpdateTeam {
  onUpdateTeam {
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
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
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
export const onCreateAthlete = `subscription OnCreateAthlete {
  onCreateAthlete {
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
export const onUpdateAthlete = `subscription OnUpdateAthlete {
  onUpdateAthlete {
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
export const onDeleteAthlete = `subscription OnDeleteAthlete {
  onDeleteAthlete {
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
export const onCreateReferee = `subscription OnCreateReferee {
  onCreateReferee {
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
export const onUpdateReferee = `subscription OnUpdateReferee {
  onUpdateReferee {
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
export const onDeleteReferee = `subscription OnDeleteReferee {
  onDeleteReferee {
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
export const onCreateClub = `subscription OnCreateClub {
  onCreateClub {
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
export const onUpdateClub = `subscription OnUpdateClub {
  onUpdateClub {
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
export const onDeleteClub = `subscription OnDeleteClub {
  onDeleteClub {
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
