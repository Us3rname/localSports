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
  constructor() { }

  public async doPublicQuery(queryName, variables) {

    const response = await API.graphql({
      query: queries[queryName],
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    this.handleResponse(response, queryName);
  }

  public async doPrivateQuery(queryName, variables) {

    const response = await API.graphql({
      query: queries[queryName],
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    this.handleResponse(response, queryName);
  }

  public async doPrivateMutation(mutationName, variables) {

    const response = await API.graphql({
      query: mutations[mutationName],
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    this.handleResponse(response, mutationName);
  }

  private handleResponse(response, queryName) {
    if (response && response.data[queryName] != null) {
      this.isSuccessfull = true;
      this.data = response.data[queryName];
    } else {
      this.isSuccessfull = false;
    }
  }

  private parseErrorsFromResponse() {

  }
}
