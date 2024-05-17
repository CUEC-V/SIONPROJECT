import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousDroitsReservesComponent } from './tous-droits-reserves.component';

describe('TousDroitsReservesComponent', () => {
  let component: TousDroitsReservesComponent;
  let fixture: ComponentFixture<TousDroitsReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TousDroitsReservesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TousDroitsReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
