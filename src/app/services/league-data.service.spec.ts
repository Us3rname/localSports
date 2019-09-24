import { TestBed } from '@angular/core/testing';

import { LeagueDataService } from './league-data.service';

describe('LeagueDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeagueDataService = TestBed.get(LeagueDataService);
    expect(service).toBeTruthy();
  });
});
