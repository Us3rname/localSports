// tslint:disable
// this is an auto generated file. This will be overwritten

export const listSeasons = `query ListSeasons(
  $filter: ModelSeasonFilterInput
  $limit: Int
  $nextToken: String
) {
  listSeasons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getSeason = `query GetSeason($id: ID!) {
  getSeason(id: $id) {
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
export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
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
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getHall = `query GetHall($id: ID!) {
  getHall(id: $id) {
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
export const listHalls = `query ListHalls(
  $filter: ModelHallFilterInput
  $limit: Int
  $nextToken: String
) {
  listHalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const listLeagueInfos = `query ListLeagueInfos(
  $filter: ModelLeagueInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeagueInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      ranking
      maxTeams
    }
    nextToken
  }
}
`;
export const getLeagueInfo = `query GetLeagueInfo($id: ID!) {
  getLeagueInfo(id: $id) {
    id
    name
    ranking
    maxTeams
  }
}
`;
export const getLeague = `query GetLeague($id: ID!) {
  getLeague(id: $id) {
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
export const listLeagues = `query ListLeagues(
  $filter: ModelLeagueFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
  }
}
`;
export const listLeagueTeams = `query ListLeagueTeams(
  $filter: ModelLeagueTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeagueTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLeagueTeam = `query GetLeagueTeam($id: ID!) {
  getLeagueTeam(id: $id) {
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
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
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
