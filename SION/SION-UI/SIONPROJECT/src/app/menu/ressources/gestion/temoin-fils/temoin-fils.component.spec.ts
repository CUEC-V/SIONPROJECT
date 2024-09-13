import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoinFilsComponent } from './temoin-fils.component';

describe('TemoinFilsComponent', () => {
  let component: TemoinFilsComponent;
  let fixture: ComponentFixture<TemoinFilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemoinFilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemoinFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
