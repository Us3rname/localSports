import { Injectable } from '@angular/core';
import { GraphqlRequestService } from './graphql-request.service';
import { CreateSeasonInput, UpdateSeasonInput } from 'src/API';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonDataService {

  constructor(private graphqlRequestService: GraphqlRequestService) { }


  getCurrentSeason(clubId: string) {

    // return this.graphqlRequestService.doPublicQuery('')
  }

  async createSeason(createSeasonInput: CreateSeasonInput) {

    await this.graphqlRequestService.doPrivateMutation('createSeason', { input: createSeasonInput });

    if (this.graphqlRequestService.isSuccessfull) {
      return this.graphqlRequestService.data;
    } else {
      console.log(this.graphqlRequestService.data);
    }
  }

  async getSeasonById(seasonId) {
    await this.graphqlRequestService.doPublicQuery('getSeason', { id: seasonId });

    if (this.graphqlRequestService.isSuccessfull) {
      return this.graphqlRequestService.data;
    } else {
      console.log('unsuccesfulllll ' + this.graphqlRequestService.data);
    }
  }

  async getSeasons() {

    await this.graphqlRequestService.doPublicQuery('listSeasons', { filter: { clubId: { eq: environment.clubId } } });

    if (this.graphqlRequestService.isSuccessfull) {
      return this.graphqlRequestService.data;
    } else {
      console.log(this.graphqlRequestService.data);
    }
  }

  async updateSeason(input: UpdateSeasonInput) {
    await this.graphqlRequestService.doPrivateMutation('updateSeason', { input });

    if (this.graphqlRequestService.isSuccessfull) {
      return this.graphqlRequestService.data;
    } else {
      console.log(this.graphqlRequestService.data);
    }
  }

  async deleteSeason(seasonId) {

    await this.graphqlRequestService.doPrivateMutation('deleteSeason', { input: { id: seasonId } });

    if (this.graphqlRequestService.isSuccessfull) {
      return this.graphqlRequestService.data;
    } else {
      console.log(this.graphqlRequestService.data);
    }
  }
}
