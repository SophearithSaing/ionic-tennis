import { TestBed } from '@angular/core/testing';

import { TennisService } from './tennis.service';

describe('TennisService', () => {
  let service: TennisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TennisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
