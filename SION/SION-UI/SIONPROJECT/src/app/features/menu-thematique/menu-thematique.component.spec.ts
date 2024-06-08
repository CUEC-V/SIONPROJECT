import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuThematiqueComponent } from './menu-thematique.component';

describe('MenuThematiqueComponent', () => {
  let component: MenuThematiqueComponent;
  let fixture: ComponentFixture<MenuThematiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuThematiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
