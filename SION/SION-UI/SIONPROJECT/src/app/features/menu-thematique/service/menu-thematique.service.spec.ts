import { TestBed } from '@angular/core/testing';

import { MenuThematiqueService } from './menu-thematique.service';

describe('MenuThematiqueService', () => {
  let service: MenuThematiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuThematiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
