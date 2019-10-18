import { Injectable } from '@angular/core';
import Amplify, { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '../../../node_modules/@aws-amplify/api/lib/types/index';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class GraphqlRequestService {

  data;
  isSuccessfull = false;
  hasNextToken = false;
  nextToken: string = null;
  private response;
  constructor() { }

  public async doPublicQuery(queryName, variables) {

    variables.limit = 1000;
    const response = await API.graphql({
      query: queries[queryName],
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    this.handleResponse(response, queryName);
  }

  public async doPrivateQuery(queryName, variables) {

    variables.limit = 1000;
    const response = await API.graphql({
      query: queries[queryName],
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    this.handleResponse(response, queryName);
  }

  public doSPrivateMutation(mutationName, variables) {

    this.response = API.graphql({
      query: mutations[mutationName],
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    console.log(this.response);

    this.handleResponse(this.response, mutationName);
  }

  public async doPrivateMutation(mutationName, variables) {

    this.response = await API.graphql({
      query: mutations[mutationName],
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    this.handleResponse(this.response, mutationName);
  }

  private handleResponse(response, queryName) {
    // When there's a response with data
    if (response && response.data[queryName] != null) {
      this.isSuccessfull = true;
      this.data = response.data[queryName];

      // When there's a nextToken, to retrieve the rest of the data, store it locally.
      // So that we know for the next time that we can use it.
      if (response.data[queryName].nextToken !== '') {
        this.hasNextToken = true;
        this.nextToken = response.data[queryName].nextToken;
      } else {
        this.hasNextToken = true;
        this.nextToken = null;
      }
    } else {
      console.log('Is dit nu een promise?');
      console.log(response);
      this.isSuccessfull = false;
    }
  }

  private parseErrorsFromResponse() {

  }
}
