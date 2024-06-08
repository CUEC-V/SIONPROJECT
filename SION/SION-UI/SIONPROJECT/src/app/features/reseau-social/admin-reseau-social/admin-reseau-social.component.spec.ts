import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReseauSocialComponent } from './admin-reseau-social.component';

describe('AdminReseauSocialComponent', () => {
  let component: AdminReseauSocialComponent;
  let fixture: ComponentFixture<AdminReseauSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReseauSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminReseauSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
