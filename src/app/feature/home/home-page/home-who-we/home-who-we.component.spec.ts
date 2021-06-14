import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhoWeComponent } from './home-who-we.component';

describe('HomeWhoWeComponent', () => {
  let component: HomeWhoWeComponent;
  let fixture: ComponentFixture<HomeWhoWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhoWeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhoWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
