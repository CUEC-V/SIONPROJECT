import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirToutesLesPagesComponent } from './voir-toutes-les-pages.component';

describe('VoirToutesLesPagesComponent', () => {
  let component: VoirToutesLesPagesComponent;
  let fixture: ComponentFixture<VoirToutesLesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirToutesLesPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoirToutesLesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
