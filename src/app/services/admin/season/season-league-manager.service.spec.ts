import { TestBed } from '@angular/core/testing';

import { SeasonLeagueManagerService } from './season-league-manager.service';

describe('SeasonLeagueManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonLeagueManagerService = TestBed.get(SeasonLeagueManagerService);
    expect(service).toBeTruthy();
  });
});
