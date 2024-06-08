import { TestBed } from '@angular/core/testing';

import { ReseauSocialService } from './reseau-social.service';

describe('ReseauSocialService', () => {
  let service: ReseauSocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReseauSocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
