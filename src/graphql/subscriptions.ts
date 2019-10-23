// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateSeason = `subscription OnCreateSeason {
  onCreateSeason {
    id
    title
    beginDate
    endDate
    clubId
    leagues {
      items {
        id
        owner
        season {
          id
          title
          beginDate
          endDate
          clubId
        }
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        teamsInLeague {
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
export const onUpdateSeason = `subscription OnUpdateSeason {
  onUpdateSeason {
    id
    title
    beginDate
    endDate
    clubId
    leagues {
      items {
        id
        owner
        season {
          id
          title
          beginDate
          endDate
          clubId
        }
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        teamsInLeague {
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
export const onDeleteSeason = `subscription OnDeleteSeason {
  onDeleteSeason {
    id
    title
    beginDate
    endDate
    clubId
    leagues {
      items {
        id
        owner
        season {
          id
          title
          beginDate
          endDate
          clubId
        }
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        teamsInLeague {
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
      clubId
      leagues {
        items {
          id
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
          clubId
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
          clubId
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
      clubId
      leagues {
        items {
          id
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
          clubId
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
          clubId
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
      clubId
      leagues {
        items {
          id
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
          clubId
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
          clubId
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
      clubId
      leagues {
        items {
          id
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
      clubId
      leagues {
        items {
          id
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
      clubId
      leagues {
        items {
          id
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
        clubId
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
          nextToken
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
        clubId
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
          nextToken
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
        clubId
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
          nextToken
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
    season {
      id
      title
      beginDate
      endDate
      clubId
      leagues {
        items {
          id
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
    leagueInfo {
      id
      name
      ranking
      maxTeams
    }
    teamsInLeague {
      items {
        id
        leagueId
        teamId
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
export const onUpdateLeague = `subscription OnUpdateLeague {
  onUpdateLeague {
    id
    owner
    season {
      id
      title
      beginDate
      endDate
      clubId
      leagues {
        items {
          id
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
    leagueInfo {
      id
      name
      ranking
      maxTeams
    }
    teamsInLeague {
      items {
        id
        leagueId
        teamId
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
export const onDeleteLeague = `subscription OnDeleteLeague {
  onDeleteLeague {
    id
    owner
    season {
      id
      title
      beginDate
      endDate
      clubId
      leagues {
        items {
          id
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
    leagueInfo {
      id
      name
      ranking
      maxTeams
    }
    teamsInLeague {
      items {
        id
        leagueId
        teamId
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
export const onCreateLeagueTeam = `subscription OnCreateLeagueTeam {
  onCreateLeagueTeam {
    id
    leagueId
    teamId
    league {
      id
      owner
      season {
        id
        title
        beginDate
        endDate
        clubId
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
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      teamsInLeague {
        items {
          id
          leagueId
          teamId
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
    team {
      id
      name
      contact
      owner
      teamLeague {
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
    leagueId
    teamId
    league {
      id
      owner
      season {
        id
        title
        beginDate
        endDate
        clubId
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
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      teamsInLeague {
        items {
          id
          leagueId
          teamId
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
    team {
      id
      name
      contact
      owner
      teamLeague {
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
    leagueId
    teamId
    league {
      id
      owner
      season {
        id
        title
        beginDate
        endDate
        clubId
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
      leagueInfo {
        id
        name
        ranking
        maxTeams
      }
      teamsInLeague {
        items {
          id
          leagueId
          teamId
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
    team {
      id
      name
      contact
      owner
      teamLeague {
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
      items {
        id
        leagueId
        teamId
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
      nextToken
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
      items {
        id
        leagueId
        teamId
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
      nextToken
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
      items {
        id
        leagueId
        teamId
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
      nextToken
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
export const onCreateTeamMembers = `subscription OnCreateTeamMembers {
  onCreateTeamMembers {
    id
    teamId
    athleteId
    team {
      id
      name
      contact
      owner
      teamLeague {
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
    athlete {
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
          nextToken
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
}
`;
export const onUpdateTeamMembers = `subscription OnUpdateTeamMembers {
  onUpdateTeamMembers {
    id
    teamId
    athleteId
    team {
      id
      name
      contact
      owner
      teamLeague {
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
    athlete {
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
          nextToken
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
}
`;
export const onDeleteTeamMembers = `subscription OnDeleteTeamMembers {
  onDeleteTeamMembers {
    id
    teamId
    athleteId
    team {
      id
      name
      contact
      owner
      teamLeague {
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
    athlete {
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
          nextToken
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
        items {
          id
          leagueId
          teamId
        }
        nextToken
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
        clubId
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
          nextToken
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
        clubId
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
          nextToken
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
        clubId
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
          nextToken
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
        season {
          id
          title
          beginDate
          endDate
          clubId
        }
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        teamsInLeague {
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
        season {
          id
          title
          beginDate
          endDate
          clubId
        }
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        teamsInLeague {
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
        season {
          id
          title
          beginDate
          endDate
          clubId
        }
        leagueInfo {
          id
          name
          ranking
          maxTeams
        }
        teamsInLeague {
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
        name
        contact
        owner
        teamLeague {
          nextToken
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
