import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyUsComponent } from './home-why-us.component';

describe('HomeWhyUsComponent', () => {
  let component: HomeWhyUsComponent;
  let fixture: ComponentFixture<HomeWhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhyUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
