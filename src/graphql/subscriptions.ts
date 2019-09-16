// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateLeague = `subscription OnCreateLeague {
  onCreateLeague {
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
export const onUpdateLeague = `subscription OnUpdateLeague {
  onUpdateLeague {
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
export const onDeleteLeague = `subscription OnDeleteLeague {
  onDeleteLeague {
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
export const onCreateTeam = `subscription OnCreateTeam {
  onCreateTeam {
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
export const onUpdateTeam = `subscription OnUpdateTeam {
  onUpdateTeam {
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
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
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
export const onCreateAthlete = `subscription OnCreateAthlete {
  onCreateAthlete {
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
export const onUpdateAthlete = `subscription OnUpdateAthlete {
  onUpdateAthlete {
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
export const onDeleteAthlete = `subscription OnDeleteAthlete {
  onDeleteAthlete {
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
export const onCreateReferee = `subscription OnCreateReferee {
  onCreateReferee {
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
export const onUpdateReferee = `subscription OnUpdateReferee {
  onUpdateReferee {
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
export const onDeleteReferee = `subscription OnDeleteReferee {
  onDeleteReferee {
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
