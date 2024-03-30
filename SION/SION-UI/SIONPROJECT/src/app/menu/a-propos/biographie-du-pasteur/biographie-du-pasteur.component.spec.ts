import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographieDuPasteurComponent } from './biographie-du-pasteur.component';

describe('BiographieDuPasteurComponent', () => {
  let component: BiographieDuPasteurComponent;
  let fixture: ComponentFixture<BiographieDuPasteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiographieDuPasteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiographieDuPasteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
