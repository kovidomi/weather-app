import { TestBed } from '@angular/core/testing';

import { CityReaderService } from './city-reader.service';

describe('CityReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityReaderService = TestBed.get(CityReaderService);
    expect(service).toBeTruthy();
  });
});
