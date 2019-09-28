import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateSportsHallInput, CreateHallInput } from 'src/API';
import { environment } from '../../../../../environments/environment';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';
import { SporthallService } from '../../../../services/sporthall.service';

@Component({
  selector: 'app-sports-hall-create',
  templateUrl: './sports-hall-create.page.html',
  styleUrls: ['./sports-hall-create.page.scss'],
})
export class SportsHallCreatePage implements OnInit {

  public sportsHall: { name: string, street: string, zipCode: string, city: string, phone: string, streetNumber: number };
  private initialSportsHallState = {
    name: 'Sportpunt zeeland', street: 'Zwembadweg',
    zipCode: '1234 AV', city: 'Goes', phone: '0113-123456', streetNumber: 89
  };

  public halls = new Array();

  constructor(
    private router: Router,
    private graphqlRequestService: GraphqlRequestService,
    public sporthallService: SporthallService
  ) {
    this.sportsHall = this.initialSportsHallState;
  }

  ngOnInit() {
    this.addEmptyHall();
  }

  async processForm() {

    try {
      const createSportsHallInput: CreateSportsHallInput = {
        name: this.sportsHall.name, sportsHallClubId: environment.clubId, active: true, street: this.sportsHall.street,
        zipCode: this.sportsHall.zipCode, city: this.sportsHall.city, phone: this.sportsHall.phone,
        streetNumber: this.sportsHall.streetNumber
      };

      await this.graphqlRequestService.doPrivateMutation('createSportsHall', { input: createSportsHallInput });

      if (this.graphqlRequestService.isSuccessfull) {
        this.saveHalls(this.graphqlRequestService.data);
        return this.router.navigate(['/admin/sports-hall']);
      } else {

      }
    } catch (err) {
      console.log(err);
    }
  }

  saveHalls(sportsHall) {

    for (const hall of this.sporthallService.halls) {
      const createHallInput: CreateHallInput = { name: hall.name, hallSportsHallId: sportsHall.id };
      this.graphqlRequestService.doPrivateMutation('createHall', { input: createHallInput });
    }
  }

  addEmptyHall() {
    this.sporthallService.addEmptyHall();
  }

  removeHall(index, halId) {
    this.sporthallService.removeHall(index, halId);
  }
}
