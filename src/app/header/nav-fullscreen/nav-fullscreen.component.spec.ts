import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFullscreenComponent } from './nav-fullscreen.component';

describe('NavFullscreenComponent', () => {
  let component: NavFullscreenComponent;
  let fixture: ComponentFixture<NavFullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFullscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
