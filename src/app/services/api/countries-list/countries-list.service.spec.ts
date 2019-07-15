import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CountriesListService } from './countries-list.service';

describe('CountriesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: CountriesListService = TestBed.get(CountriesListService);
    expect(service).toBeTruthy();
  });
});
