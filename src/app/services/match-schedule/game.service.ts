import { Injectable } from '@angular/core';
import { CreateGameInput } from 'src/API';
import { GraphqlRequestService } from '../graphql-request.service';
import * as mutations from '../../../graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private graphqlRequestService: GraphqlRequestService) { }


  async createGame(createGameInput: CreateGameInput) {

    await this.graphqlRequestService.doPrivateMutation('createGame', { input: createGameInput });
    return this.graphqlRequestService.data;
  }
}
