import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorepComponent } from './core-p.component';

describe('CoreComponent', () => {
  let component: CorepComponent;
  let fixture: ComponentFixture<CorepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
