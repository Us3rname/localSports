import { TestBed } from '@angular/core/testing';

import { SporthallServiceService } from './sporthall-service.service';

describe('SporthallServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SporthallServiceService = TestBed.get(SporthallServiceService);
    expect(service).toBeTruthy();
  });
});
