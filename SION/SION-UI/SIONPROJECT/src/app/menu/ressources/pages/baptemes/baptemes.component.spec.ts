import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptemesComponent } from './baptemes.component';

describe('BaptemesComponent', () => {
  let component: BaptemesComponent;
  let fixture: ComponentFixture<BaptemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaptemesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaptemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
