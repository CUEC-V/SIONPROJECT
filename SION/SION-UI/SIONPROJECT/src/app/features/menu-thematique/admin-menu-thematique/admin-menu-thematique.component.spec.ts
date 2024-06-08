import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuThematiqueComponent } from './admin-menu-thematique.component';

describe('AdminMenuThematiqueComponent', () => {
  let component: AdminMenuThematiqueComponent;
  let fixture: ComponentFixture<AdminMenuThematiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMenuThematiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMenuThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
