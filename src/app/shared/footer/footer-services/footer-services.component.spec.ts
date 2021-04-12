import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterServicesComponent } from './footer-services.component';

describe('FooterServicesComponent', () => {
  let component: FooterServicesComponent;
  let fixture: ComponentFixture<FooterServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
