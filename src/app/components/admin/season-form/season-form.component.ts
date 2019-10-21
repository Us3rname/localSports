import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { CreateSeasonInput, UpdateSeasonInput } from 'src/API';
import { SeasonDataService } from 'src/app/services/season-data.service';
import { environment } from 'src/environments/environment';
import { Season } from 'src/app/interfaces/season';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.scss'],
})
export class SeasonFormComponent implements OnInit {

  season: Season;
  seasonForm: FormGroup;
  submitted = false;

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

  constructor(
    private formBuilder: FormBuilder,
    private seasonDataService: SeasonDataService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.seasonForm = this.formBuilder.group({
      title: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });

    if (this.seasonId !== undefined) {
      this.getSeason(this.seasonId);
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

    this.seasonDataService.createSeason(createSeasonInput);
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
}
