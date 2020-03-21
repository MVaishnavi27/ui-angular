import { TestBed } from '@angular/core/testing';

import { IposerviceService } from './iposervice.service';

describe('IposerviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IposerviceService = TestBed.get(IposerviceService);
    expect(service).toBeTruthy();
  });
});
