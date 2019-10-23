import { LeagueInfo } from './leagueInfo';
import { LeagueTeam } from './leagueTeam';

export interface League {
    id: string;
    leagueInfo: LeagueInfo;
    leagueTeams: LeagueTeam[];
}
