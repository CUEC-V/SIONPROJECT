import { TestBed } from '@angular/core/testing';

import { PredicationServiceService } from './predication-service.service';

describe('PredicationServiceService', () => {
  let service: PredicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
