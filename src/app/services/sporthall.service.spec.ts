import { TestBed } from '@angular/core/testing';

import { SporthallService } from './sporthall.service';

describe('SporthallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SporthallService = TestBed.get(SporthallService);
    expect(service).toBeTruthy();
  });
});
