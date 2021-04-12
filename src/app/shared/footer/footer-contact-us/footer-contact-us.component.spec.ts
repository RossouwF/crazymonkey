import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContactUsComponent } from './footer-contact-us.component';

describe('FooterContactUsComponent', () => {
  let component: FooterContactUsComponent;
  let fixture: ComponentFixture<FooterContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
