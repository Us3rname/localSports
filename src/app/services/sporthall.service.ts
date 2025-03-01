import { Injectable } from '@angular/core';
import { UpdateSportsHallInput, UpdateHallInput, CreateHallInput, DeleteHallInput } from 'src/API';
import { GraphqlRequestService } from './graphql-request.service';
import * as uuid from 'uuid';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SporthallService {

  // All the existing halls, keep track of these in order to know whether to update.
  public existingHalls = new Array();

  // Halls that need to be deleted
  public hallsToDelete = new Array();

  // Halls that are being added
  public newHalls = new Array();

  public halls = new Array();

  constructor(
    private graphqlRequestService: GraphqlRequestService
  ) { }


  async getSportsHalls() {
    let sportsHalls: any[];

    await this.graphqlRequestService.doPublicQuery('listSportsHalls', {});

    if (this.graphqlRequestService.isSuccessfull) {
      sportsHalls = this.graphqlRequestService.data.items;
    }
    return sportsHalls;
  }

  async updateHalls(sportsHallId) {

    for (const hall of this.hallsToDelete) {
      const deleteHallInput: DeleteHallInput = { id: hall.id };
      this.graphqlRequestService.doPrivateMutation('deleteHall', { input: deleteHallInput });
    }

    for (const hall of this.existingHalls) {
      const updateHallInput: UpdateHallInput = { name: hall.name, id: hall.id };
      this.graphqlRequestService.doPrivateMutation('updateHall', { input: updateHallInput });
    }

    for (const hall of this.newHalls) {
      const createHallInput: CreateHallInput = { name: hall.name, hallSportsHallId: sportsHallId };
      this.graphqlRequestService.doPrivateMutation('createHall', { input: createHallInput });
    }
  }

  addEmptyHall() {
    // Need to generate an unique id for the frontend. Is not being used as an id for the hall itself.
    const newHall = { id: uuid.v4(), name: '' };
    this.halls.push(newHall);
    this.newHalls[newHall.id] = newHall;
  }

  removeHall(index, hallId) {

    // We loop over the halls in the template they have a normal index
    if (this.halls[index]) {
      this.halls.splice(index, 1);
    }

    // When it's an existing hall mark it to delete
    if (this.existingHalls[hallId]) {
      this.hallsToDelete.push(this.existingHalls[hallId]);
      this.existingHalls.splice(hallId, 1);
    }

    if (this.newHalls[hallId]) {
      this.newHalls.splice(hallId, 1);
    }
  }
}
