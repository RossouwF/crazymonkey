import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCovidComponent } from './home-covid.component';

describe('HomeCovidComponent', () => {
  let component: HomeCovidComponent;
  let fixture: ComponentFixture<HomeCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
