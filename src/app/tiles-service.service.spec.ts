import { TestBed } from '@angular/core/testing';

import { TilesServiceService } from './tiles-service.service';

describe('TilesServiceService', () => {
  let service: TilesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TilesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
