import { Injectable } from '@angular/core';
import { GraphqlRequestService } from './graphql-request.service';
import { CreateRefereeInput, UpdateRefereeInput } from 'src/API';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(
    private graphqlRequestService: GraphqlRequestService
  ) { }


  async getReferees() {
    let referees: any[];

    await this.graphqlRequestService.doPrivateQuery('listReferees', {});

    if (this.graphqlRequestService.isSuccessfull) {
      referees = this.graphqlRequestService.data.items;
    }

    return referees;
  }

  async createReferee(createRefereeInput: CreateRefereeInput) {

    await this.graphqlRequestService.doPrivateMutation('createReferee', { input: createRefereeInput });
    if (this.graphqlRequestService.isSuccessfull) {
      return this.graphqlRequestService.data;
    }
  }

  async updateReferee(updateRefereeInput: UpdateRefereeInput) {

    await this.graphqlRequestService.doPrivateMutation('updateReferee', { input: updateRefereeInput });
    if (this.graphqlRequestService.isSuccessfull) {
      return this.graphqlRequestService.data;
    }
  }
}
