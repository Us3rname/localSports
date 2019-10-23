import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { CreateSeasonInput, UpdateSeasonInput } from 'src/API';
import { SeasonDataService } from 'src/app/services/season-data.service';
import { environment } from 'src/environments/environment';
import { Season } from 'src/app/interfaces/season';
import { AlertController } from '@ionic/angular';
import { League } from 'src/app/interfaces/league';
import { LeagueDataService } from 'src/app/services/league-data.service';
import { TeamService } from 'src/app/services/team-service';
import { Team } from 'src/app/interfaces/team';

@Component({
  selector: 'app-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.scss'],
})
export class SeasonFormComponent implements OnInit {

  season: Season;
  leagues: League[];
  selectedLeagues: League[] = new Array();
  seasonForm: FormGroup;
  submitted = false;
  allTeams: Team[];
  availableTeams = new Array();

  @Input() action;
  @Input() seasonId: string;
  @Output() seasonMutated = new EventEmitter();

  validationMessages = {
    title: [
      { type: 'required', message: 'De naam is verplicht.' }
    ],
    beginDate: [
      { type: 'required', message: 'De begindatum is verplicht.' }
    ],
    endDate: [
      { type: 'required', message: 'De einddatum is verplicht.' }
    ],
  };

  teamLeagueItems: { leagueId: string }[];

  constructor(
    private formBuilder: FormBuilder,
    private seasonDataService: SeasonDataService,
    private alertController: AlertController,
    private leagueDataService: LeagueDataService,
    private teamService: TeamService
  ) { }

  ngOnInit() {

    this.teamLeagueItems = [];

    this.seasonForm = this.formBuilder.group({
      title: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      leagues: ['', Validators.required],
      leagueTeams: this.formBuilder.array([])
    });

    if (this.seasonId !== undefined) {
      this.getSeason(this.seasonId);
    }

    this.loadLeagues().then(() => this.loadTeams());
  }

  get teamLeaguesArray(): FormArray {
    return this.seasonForm.get('leagueTeams') as FormArray;
  }

  async loadLeagues() {
    this.leagues = await this.leagueDataService.getLeagues();
  }

  async loadTeams() {
    this.allTeams = await this.teamService.getAllTeams();

    for (const league of this.leagues) {
      this.availableTeams[league.id] = Object.assign([], this.allTeams);
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.seasonForm.controls; }

  async processForm(formValues) {
    // This will trigger the error messages (if there are any)
    this.submitted = true;

    // stop here if form is invalid
    if (this.seasonForm.invalid) {
      return;
    }

    if (this.action === 'create') {
      this.createNewSeason(formValues);
    } else if (this.action === 'edit') {
      this.editSeason(formValues);
    }

    this.seasonMutated.emit();
  }

  private async createNewSeason(formValues) {
    const createSeasonInput: CreateSeasonInput = {
      beginDate: formValues.beginDate, endDate: formValues.endDate, title: formValues.title,
      clubId: environment.clubId, seasonClubId: environment.clubId
    };

    const team = await this.seasonDataService.createSeason(createSeasonInput);

    for (const leagueId of formValues.leagues) {
      this.leagueDataService.assignSeasonToLeague(leagueId, team.id);
    }

    for (const teamLeague of formValues.leagueTeams) {
      this.leagueDataService.createTeamLeague(teamLeague);
    }
  }

  private async editSeason(formValues) {

    const updateSeasonInput: UpdateSeasonInput = {
      id: this.season.id, beginDate: formValues.beginDate, endDate: formValues.endDate, title: formValues.title
    };

    this.seasonDataService.updateSeason(updateSeasonInput);
  }

  private async getSeason(seasonId: string) {
    this.season = await this.seasonDataService.getSeasonById(seasonId);

    this.seasonForm.patchValue({
      title: this.season.title,
      beginDate: this.season.beginDate,
      endDate: this.season.endDate
    });
  }

  async presentDeleteAlert() {
    const alert = await this.alertController.create({
      header: 'Waarschuwing!',
      message: 'Weet u zeker dat u het seizoen wil verwijderen?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Okay',
          cssClass: 'danger',
          handler: () => {
            this.deleteSeason();
          }
        }
      ]
    });

    await alert.present();
  }

  deleteSeason() {
    this.seasonDataService.deleteSeason(this.seasonId);
    this.seasonMutated.emit();
  }

  onLeaguesSelected(event) {
    const selectedLeagueIds: string[] = event.detail.value;

    for (const league of this.leagues) {
      // When the selected league id is the same, store the league object in the selectedLeagues array.
      if (selectedLeagueIds.includes(league.id)) {
        this.selectedLeagues.push(league);
        this.addTeamLeague(league);
      }
    }
  }

  onTeamsSelected(event, selectedLeagueId) {
    const selectedTeamIds = event.detail.value;

    // Remove the selected teams from this league from the other dropdowns, so that a team can't be chosen twice.
    for (const teamId of selectedTeamIds) {

      const loop = this.availableTeams;
      // Loop through the available teams, to check that we don't remove the teams from the selected dropdown
      for (const leagueId in loop) {

        if (leagueId !== selectedLeagueId) {
          // For the other leagues, remove the selected teams.
          for (let i = 0; i < loop[leagueId].length; i++) {
            if (this.availableTeams[leagueId][i].id === teamId) {
              this.availableTeams[leagueId].splice(i, 1);
            }
          }
        }
      }
    }
  }

  get leagueTeams(): FormArray {
    return this.seasonForm.get('leagueTeams') as FormArray;
  }

  addTeamLeague(league) {
    this.leagueTeams.push(this.formBuilder.group(new TeamLeague(league, [])));
  }
}

// needs to move somewhere
export class TeamLeague {
  constructor(
    public league: League,
    public teams: []
  ) { }
}
