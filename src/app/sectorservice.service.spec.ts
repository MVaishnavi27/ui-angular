import { TestBed } from '@angular/core/testing';

import { SectorserviceService } from './sectorservice.service';

describe('SectorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectorserviceService = TestBed.get(SectorserviceService);
    expect(service).toBeTruthy();
  });
});
