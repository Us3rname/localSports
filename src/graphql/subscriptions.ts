// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateSeason = `subscription OnCreateSeason {
  onCreateSeason {
    id
    title
    beginDate
    endDate
    league {
      id
      owner
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      leagueTeams {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
export const onUpdateSeason = `subscription OnUpdateSeason {
  onUpdateSeason {
    id
    title
    beginDate
    endDate
    league {
      id
      owner
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      leagueTeams {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
export const onDeleteSeason = `subscription OnDeleteSeason {
  onDeleteSeason {
    id
    title
    beginDate
    endDate
    league {
      id
      owner
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      leagueTeams {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
    id
    gameDay
    scoreHome
    scoreAway
    season {
      id
      title
      beginDate
      endDate
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
          name
          contact
          owner
        }
        awayTeam {
          id
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
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
          name
          contact
          owner
        }
        awayTeam {
          id
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
    id
    gameDay
    scoreHome
    scoreAway
    season {
      id
      title
      beginDate
      endDate
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
          name
          contact
          owner
        }
        awayTeam {
          id
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
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
          name
          contact
          owner
        }
        awayTeam {
          id
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
    id
    gameDay
    scoreHome
    scoreAway
    season {
      id
      title
      beginDate
      endDate
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
          name
          contact
          owner
        }
        awayTeam {
          id
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
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
          name
          contact
          owner
        }
        awayTeam {
          id
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
    season {
      id
      title
      beginDate
      endDate
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
    season {
      id
      title
      beginDate
      endDate
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
    season {
      id
      title
      beginDate
      endDate
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
export const onCreateHall = `subscription OnCreateHall {
  onCreateHall {
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
        league {
          id
          owner
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
        name
        contact
        owner
        teamLeague {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
export const onUpdateHall = `subscription OnUpdateHall {
  onUpdateHall {
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
        league {
          id
          owner
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
        name
        contact
        owner
        teamLeague {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
export const onDeleteHall = `subscription OnDeleteHall {
  onDeleteHall {
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
        league {
          id
          owner
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
        name
        contact
        owner
        teamLeague {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
export const onCreateLeagueInfo = `subscription OnCreateLeagueInfo {
  onCreateLeagueInfo {
    id
    name
    ranking
    maxTeams
  }
}
`;
export const onUpdateLeagueInfo = `subscription OnUpdateLeagueInfo {
  onUpdateLeagueInfo {
    id
    name
    ranking
    maxTeams
  }
}
`;
export const onDeleteLeagueInfo = `subscription OnDeleteLeagueInfo {
  onDeleteLeagueInfo {
    id
    name
    ranking
    maxTeams
  }
}
`;
export const onCreateLeague = `subscription OnCreateLeague {
  onCreateLeague {
    id
    owner
    leagueInfo {
      id
      name
      ranking
      maxTeams
    }
    leagueTeams {
      id
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
      team {
        id
        name
        contact
        owner
        teamLeague {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
export const onUpdateLeague = `subscription OnUpdateLeague {
  onUpdateLeague {
    id
    owner
    leagueInfo {
      id
      name
      ranking
      maxTeams
    }
    leagueTeams {
      id
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
      team {
        id
        name
        contact
        owner
        teamLeague {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
export const onDeleteLeague = `subscription OnDeleteLeague {
  onDeleteLeague {
    id
    owner
    leagueInfo {
      id
      name
      ranking
      maxTeams
    }
    leagueTeams {
      id
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
      team {
        id
        name
        contact
        owner
        teamLeague {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
export const onCreateLeagueTeam = `subscription OnCreateLeagueTeam {
  onCreateLeagueTeam {
    id
    league {
      id
      owner
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      leagueTeams {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
    team {
      id
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
export const onUpdateLeagueTeam = `subscription OnUpdateLeagueTeam {
  onUpdateLeagueTeam {
    id
    league {
      id
      owner
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      leagueTeams {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
    team {
      id
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
export const onDeleteLeagueTeam = `subscription OnDeleteLeagueTeam {
  onDeleteLeagueTeam {
    id
    league {
      id
      owner
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      leagueTeams {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
    team {
      id
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
export const onCreateTeam = `subscription OnCreateTeam {
  onCreateTeam {
    id
    name
    contact
    owner
    teamLeague {
      id
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
      team {
        id
        name
        contact
        owner
        teamLeague {
          id
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
    athletes {
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
export const onUpdateTeam = `subscription OnUpdateTeam {
  onUpdateTeam {
    id
    name
    contact
    owner
    teamLeague {
      id
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
      team {
        id
        name
        contact
        owner
        teamLeague {
          id
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
    athletes {
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
    id
    name
    contact
    owner
    teamLeague {
      id
      league {
        id
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
      team {
        id
        name
        contact
        owner
        teamLeague {
          id
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
    athletes {
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
export const onCreateAthlete = `subscription OnCreateAthlete {
  onCreateAthlete {
    id
    name
    email
    phone
    teams {
      id
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
export const onUpdateAthlete = `subscription OnUpdateAthlete {
  onUpdateAthlete {
    id
    name
    email
    phone
    teams {
      id
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
export const onDeleteAthlete = `subscription OnDeleteAthlete {
  onDeleteAthlete {
    id
    name
    email
    phone
    teams {
      id
      name
      contact
      owner
      teamLeague {
        id
        league {
          id
          owner
        }
        team {
          id
          name
          contact
          owner
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
        league {
          id
          owner
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
        name
        contact
        owner
        teamLeague {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
        league {
          id
          owner
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
        name
        contact
        owner
        teamLeague {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
        league {
          id
          owner
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
        name
        contact
        owner
        teamLeague {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
          owner
        }
        nextToken
      }
      teams {
        items {
          id
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
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
        owner
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        leagueTeams {
          id
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
        name
        contact
        owner
        teamLeague {
          id
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
