import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesOfficesComponent } from './les-offices.component';

describe('LesOfficesComponent', () => {
  let component: LesOfficesComponent;
  let fixture: ComponentFixture<LesOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesOfficesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LesOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
