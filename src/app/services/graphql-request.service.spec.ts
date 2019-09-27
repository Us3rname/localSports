import { TestBed } from '@angular/core/testing';

import { GraphqlRequestService } from './graphql-request.service';

describe('GraphqlRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphqlRequestService = TestBed.get(GraphqlRequestService);
    expect(service).toBeTruthy();
  });
});
