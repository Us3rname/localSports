import { TestBed } from '@angular/core/testing';

import { GameServiceService } from './game.service';

describe('GameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});
