import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceEditionComponent } from './ressource-edition.component';

describe('RessourceEditionComponent', () => {
  let component: RessourceEditionComponent;
  let fixture: ComponentFixture<RessourceEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourceEditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RessourceEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
