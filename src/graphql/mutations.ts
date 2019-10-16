// tslint:disable
// this is an auto generated file. This will be overwritten

export const createSeason = `mutation CreateSeason($input: CreateSeasonInput!) {
  createSeason(input: $input) {
    id
    title
    beginDate
    endDate
    leagues {
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
}
`;
export const updateSeason = `mutation UpdateSeason($input: UpdateSeasonInput!) {
  updateSeason(input: $input) {
    id
    title
    beginDate
    endDate
    leagues {
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
}
`;
export const deleteSeason = `mutation DeleteSeason($input: DeleteSeasonInput!) {
  deleteSeason(input: $input) {
    id
    title
    beginDate
    endDate
    leagues {
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
}
`;
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    gameDay
    scoreHome
    scoreAway
    season {
      id
      title
      beginDate
      endDate
      leagues {
        items {
          id
          name
          ranking
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
    hall {
      id
      name
      games {
        id
        gameDay
        scoreHome
        scoreAway
        season {
          id
          title
          beginDate
          endDate
        }
        hall {
          id
          name
        }
        homeTeam {
          id
          leagueId
          name
          contact
          owner
        }
        awayTeam {
          id
          leagueId
          name
          contact
          owner
        }
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
      games {
        id
        gameDay
        scoreHome
        scoreAway
        season {
          id
          title
          beginDate
          endDate
        }
        hall {
          id
          name
        }
        homeTeam {
          id
          leagueId
          name
          contact
          owner
        }
        awayTeam {
          id
          leagueId
          name
          contact
          owner
        }
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
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    gameDay
    scoreHome
    scoreAway
    season {
      id
      title
      beginDate
      endDate
      leagues {
        items {
          id
          name
          ranking
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
    hall {
      id
      name
      games {
        id
        gameDay
        scoreHome
        scoreAway
        season {
          id
          title
          beginDate
          endDate
        }
        hall {
          id
          name
        }
        homeTeam {
          id
          leagueId
          name
          contact
          owner
        }
        awayTeam {
          id
          leagueId
          name
          contact
          owner
        }
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
      games {
        id
        gameDay
        scoreHome
        scoreAway
        season {
          id
          title
          beginDate
          endDate
        }
        hall {
          id
          name
        }
        homeTeam {
          id
          leagueId
          name
          contact
          owner
        }
        awayTeam {
          id
          leagueId
          name
          contact
          owner
        }
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
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    gameDay
    scoreHome
    scoreAway
    season {
      id
      title
      beginDate
      endDate
      leagues {
        items {
          id
          name
          ranking
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
    hall {
      id
      name
      games {
        id
        gameDay
        scoreHome
        scoreAway
        season {
          id
          title
          beginDate
          endDate
        }
        hall {
          id
          name
        }
        homeTeam {
          id
          leagueId
          name
          contact
          owner
        }
        awayTeam {
          id
          leagueId
          name
          contact
          owner
        }
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
      games {
        id
        gameDay
        scoreHome
        scoreAway
        season {
          id
          title
          beginDate
          endDate
        }
        hall {
          id
          name
        }
        homeTeam {
          id
          leagueId
          name
          contact
          owner
        }
        awayTeam {
          id
          leagueId
          name
          contact
          owner
        }
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
    streetNumber
    streetNumberAddition
    zipCode
    city
    phone
    halls {
      items {
        id
        name
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
}
`;
export const updateSportsHall = `mutation UpdateSportsHall($input: UpdateSportsHallInput!) {
  updateSportsHall(input: $input) {
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
}
`;
export const deleteSportsHall = `mutation DeleteSportsHall($input: DeleteSportsHallInput!) {
  deleteSportsHall(input: $input) {
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
}
`;
export const createHall = `mutation CreateHall($input: CreateHallInput!) {
  createHall(input: $input) {
    id
    name
    games {
      id
      gameDay
      scoreHome
      scoreAway
      season {
        id
        title
        beginDate
        endDate
        leagues {
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
      hall {
        id
        name
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
}
`;
export const updateHall = `mutation UpdateHall($input: UpdateHallInput!) {
  updateHall(input: $input) {
    id
    name
    games {
      id
      gameDay
      scoreHome
      scoreAway
      season {
        id
        title
        beginDate
        endDate
        leagues {
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
      hall {
        id
        name
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
}
`;
export const deleteHall = `mutation DeleteHall($input: DeleteHallInput!) {
  deleteHall(input: $input) {
    id
    name
    games {
      id
      gameDay
      scoreHome
      scoreAway
      season {
        id
        title
        beginDate
        endDate
        leagues {
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
      hall {
        id
        name
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
}
`;
export const createLeague = `mutation CreateLeague($input: CreateLeagueInput!) {
  createLeague(input: $input) {
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
}
`;
export const updateLeague = `mutation UpdateLeague($input: UpdateLeagueInput!) {
  updateLeague(input: $input) {
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
}
`;
export const deleteLeague = `mutation DeleteLeague($input: DeleteLeagueInput!) {
  deleteLeague(input: $input) {
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
}
`;
export const createTeam = `mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
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
    athletes {
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
}
`;
export const updateTeam = `mutation UpdateTeam($input: UpdateTeamInput!) {
  updateTeam(input: $input) {
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
    athletes {
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
}
`;
export const deleteTeam = `mutation DeleteTeam($input: DeleteTeamInput!) {
  deleteTeam(input: $input) {
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
    athletes {
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
}
`;
export const createReferee = `mutation CreateReferee($input: CreateRefereeInput!) {
  createReferee(input: $input) {
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
    games {
      id
      gameDay
      scoreHome
      scoreAway
      season {
        id
        title
        beginDate
        endDate
        leagues {
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
      hall {
        id
        name
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
}
`;
export const updateReferee = `mutation UpdateReferee($input: UpdateRefereeInput!) {
  updateReferee(input: $input) {
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
    games {
      id
      gameDay
      scoreHome
      scoreAway
      season {
        id
        title
        beginDate
        endDate
        leagues {
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
      hall {
        id
        name
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
}
`;
export const deleteReferee = `mutation DeleteReferee($input: DeleteRefereeInput!) {
  deleteReferee(input: $input) {
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
    games {
      id
      gameDay
      scoreHome
      scoreAway
      season {
        id
        title
        beginDate
        endDate
        leagues {
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
      hall {
        id
        name
        games {
          id
          gameDay
          scoreHome
          scoreAway
        }
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
    leagues {
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
    teams {
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
    leagues {
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
    teams {
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
    leagues {
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
    teams {
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
        games {
          id
          gameDay
          scoreHome
          scoreAway
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
}
`;
