import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantiquesChantsComponent } from './cantiques-chants.component';

describe('CantiquesChantsComponent', () => {
  let component: CantiquesChantsComponent;
  let fixture: ComponentFixture<CantiquesChantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantiquesChantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CantiquesChantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
