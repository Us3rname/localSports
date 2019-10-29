import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, AbstractControl } from '@angular/forms';
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
  availableTeams: Team[];

  sharedAvailableTeams = new Array();
  selectedTeamsPerLeague = new Array();
  availableTeamsPerLeague = new Array();

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
    this.sharedAvailableTeams = await this.teamService.getAllTeams();

    for (const league of this.leagues) {
      this.availableTeamsPerLeague[league.id] = Object.assign([], this.sharedAvailableTeams);
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
    const selectedLeagueIdsInput: string[] = event.detail.value;

    // Loop through all the leagues, to add the league object to the formgroup
    for (const league of this.leagues) {

      // When the selected league id is the same, store the league object (when it's not already in there)
      // in the selectedLeagues array.
      if (selectedLeagueIdsInput.includes(league.id) && !this.selectedLeagues.includes(league)) {
        this.selectedLeagues.push(league);
        this.addTeamLeague(league);
      } else if (this.selectedLeagues.includes(league) && !selectedLeagueIdsInput.includes(league.id)) {
        this.removeLeagueFromDropdown(league);
        this.removeTeamLeagueFormControl(league);

        // If there were teams selected for this league, make them available again.
        this.makeSelectedTeamsAvailableAgain(league.id);
        this.updateTeamsForAllLeagues();
      }
    }
  }

  private removeLeagueFromDropdown(league) {

    for (let i = 0; i < this.selectedLeagues.length; i++) {
      if (this.selectedLeagues[i] === league) {
        this.selectedLeagues.splice(i, 1);
        return;
      }
    }
  }

  private removeTeamLeagueFormControl(league) {

    for (let i = 0; this.leagueTeams.controls.length; i++) {
      if (this.leagueTeams.controls[i].value.league.id === league.id) {
        this.leagueTeams.controls.splice(i, 1);
        return;
      }
    }
  }

  onTeamsSelected(event, selectedLeagueId) {
    this.makeSelectedTeamsAvailableAgain(selectedLeagueId);
    this.setSelectedTeamsForLeague(event.detail.value, selectedLeagueId);
    this.updateTeamsForAllLeagues();
  }

  /**
   * Mark the selected teams as selected so that they can't be selected on another league.
   *
   * @param selectedTeamIds The team ids that are selected by the user.
   * It's just the team ids that are being send, not the team object.
   * @param selectedLeagueId The league id from where the selectedTeamIds correspond to.
   */
  private setSelectedTeamsForLeague(selectedTeamIds, selectedLeagueId) {

    // When the user hasn't selected any teams from the dropdown.
    if (selectedTeamIds === undefined) {
      return;
    }

    // Remove the selected teams from this league from the other dropdowns, so that a team can't be chosen twice.
    for (const teamId of selectedTeamIds) {

      for (let i = 0; i < this.sharedAvailableTeams.length; i++) {
        const team = this.sharedAvailableTeams[i];
        if (team.id === teamId) {
          if (this.selectedTeamsPerLeague[selectedLeagueId] !== undefined) {
            this.selectedTeamsPerLeague[selectedLeagueId].push(team);
          } else {
            this.selectedTeamsPerLeague[selectedLeagueId] = [team];
          }

          this.sharedAvailableTeams.splice(i, 1);
        }
      }
    }
  }

  /**
   * Make all the selected teams for the league available again.
   *
   * @param selectedLeagueId The league id of which teams needs to become available
   */
  private makeSelectedTeamsAvailableAgain(selectedLeagueId) {

    // If there are any teams selected make them available again.
    if (this.selectedTeamsPerLeague[selectedLeagueId] !== undefined) {
      for (const selectedTeam of this.selectedTeamsPerLeague[selectedLeagueId]) {
        this.sharedAvailableTeams.push(selectedTeam);
      }
    }
  }

  /**
   * When there's a change on the teams dropdown. We need to update the teams that are available for the other leagues.
   */
  private updateTeamsForAllLeagues() {

    for (const leagueId in this.availableTeamsPerLeague) {

      if (this.availableTeamsPerLeague.hasOwnProperty(leagueId)) {
        const selectedTeams = (this.selectedTeamsPerLeague[leagueId] === undefined) ? [] : this.selectedTeamsPerLeague[leagueId];
        this.availableTeamsPerLeague[leagueId] = selectedTeams.concat(this.sharedAvailableTeams);
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
