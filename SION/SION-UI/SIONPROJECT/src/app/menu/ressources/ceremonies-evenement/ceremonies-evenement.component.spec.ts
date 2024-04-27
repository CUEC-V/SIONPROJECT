import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremoniesEvenementComponent } from './ceremonies-evenement.component';

describe('CeremoniesEvenementComponent', () => {
  let component: CeremoniesEvenementComponent;
  let fixture: ComponentFixture<CeremoniesEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeremoniesEvenementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeremoniesEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
