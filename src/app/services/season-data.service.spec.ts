import { TestBed } from '@angular/core/testing';

import { SeasonDataService } from './season-data.service';

describe('SeasonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonDataService = TestBed.get(SeasonDataService);
    expect(service).toBeTruthy();
  });
});
