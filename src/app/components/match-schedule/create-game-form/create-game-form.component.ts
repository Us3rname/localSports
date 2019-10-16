import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { TeamService } from 'src/app/services/team-service';
import { LeagueDataService } from 'src/app/services/league-data.service';
import { RefereeService } from 'src/app/services/referee.service';
import { SporthallService } from 'src/app/services/sporthall.service';
import { CreateGameInput } from 'src/API';
import { GameService } from 'src/app/services/match-schedule/game.service';

@Component({
  selector: 'app-create-game-form',
  templateUrl: './create-game-form.component.html',
  styleUrls: ['./create-game-form.component.scss'],
})
export class CreateGameFormComponent implements OnInit {

  @Output() gameCreated = new EventEmitter<object>();
  matchScheduleForm: FormGroup;
  submitted = false;

  validationMessages = {
    gameDay: [
      { type: 'required', message: 'Aanvangstijd is verplicht.' }
    ],
    gameHomeTeamId: [
      { type: 'required', message: 'Thuis team is verplicht.' }
    ],
    gameAwayTeamId: [
      { type: 'required', message: 'Uitspelende team is verplicht.' }
    ],
    sportshall: [
      { type: 'required', message: 'Sporthal is verplicht.' }
    ],
    gameHallId: [
      { type: 'required', message: 'Hal is verplicht.' }
    ],
    gameRefereeId: [
      { type: 'required', message: 'Scheidsrechter is verplicht.' }
    ],
    league: [
      { type: 'required', message: 'Divisie is verplicht.' }
    ],
    gameSeasonId: [
      { type: 'required', message: 'Divisie is verplicht.' }
    ],
  };

  homeTeams = new Array();
  awayTeams = new Array();
  referees = new Array();
  sportshalls = new Array();
  halls;

  selectedLeague;
  leagues;
  @Input() action;


  constructor(
    private formBuilder: FormBuilder, private leagueService: LeagueDataService, private refereeService: RefereeService,
    private sportsHallService: SporthallService, private gameService: GameService
  ) { }

  ngOnInit() {
    this.matchScheduleForm = this.formBuilder.group({
      gameDay: new FormControl({ value: '2019-10-14T13:48:00+02:00' }, Validators.required),
      gameHomeTeamId: new FormControl({
        value: '3efec6c4-4437-49e7-bd62-904f4ca89c69',
        disabled: this.selectedLeague === null
      }, Validators.required),
      gameAwayTeamId: new FormControl({
        value: 'c6e016b4-3134-4551-b237-6f2c3223d1df',
        disabled: this.selectedLeague === null
      }, Validators.required),
      sportshall: new FormControl({ value: '3999a502-d199-4903-b028-0befa6db7169' }, Validators.required),
      gameHallId: new FormControl({ value: '29fa4261-5ac5-4730-bbd4-4b102153ef15', disabled: this.halls === null }, Validators.required),
      gameRefereeId: ['5d2f76f7-e326-4c7b-88e8-3585fc5df2e3', Validators.required],
      gameSeasonId: ['', Validators.required],
    });

    this.loadTeams();
    this.loadReferees();
    this.loadSportsHalls();
  }

  async loadSportsHalls() {
    this.sportshalls = await this.sportsHallService.getSportsHalls();
  }

  async loadTeams() {
    this.leagues = await this.leagueService.getLeagues();
  }

  async loadReferees() {
    this.referees = await this.refereeService.getReferees();
  }

  async processForm(formValues) {
    // This will trigger the error messages (if there are any)
    this.submitted = true;

    // stop here if form is invalid
    if (this.matchScheduleForm.invalid) {
      return;
    }

    const createGameInput: CreateGameInput = {
      gameDay: formValues.gameDay, gameRefereeId: formValues.gameRefereeId, gameSeasonId: formValues.gameSeasonId,
      gameHallId: formValues.gameHallId, gameAwayTeamId: formValues.gameAwayTeamId, gameHomeTeamId: formValues.gameHomeTeamId
    };
    const game = await this.gameService.createGame(createGameInput);
    this.gameCreated.emit(game);
  }

  leagueChanged(event) {


    this.leagues.forEach((league) => {
      if (event.detail.value === league.id) {
        this.selectedLeague = league;
        return;
      }
    });

    this.matchScheduleForm.get('gameHomeTeamId').enable();
    this.matchScheduleForm.get('gameAwayTeamId').enable();

    const teams = this.selectedLeague.teams.items;
    this.homeTeams = teams;
    this.awayTeams = teams;
  }

  onUpdateHomeTeam(event) {
    const homeTeamId = event.detail.value;

    // Remove team from the away team list because they can't play against each other.
    // for (let i = 0; i < this.awayTeams.length; i++) {
    //   const team = this.awayTeams[i];

    //   if (team.id === homeTeamId) {
    //     this.awayTeams.splice(i, 1);
    //     return;
    //   }
    // }
  }

  onSportsHallSelected(event) {
    let selectedSportshall;
    // Find the selected sportshall to get the halls
    this.sportshalls.forEach((sporthall) => {
      if (event.detail.value === sporthall.id) {
        selectedSportshall = sporthall;
        return;
      }
    });

    this.halls = selectedSportshall.halls.items;
  }
}
