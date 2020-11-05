import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOtpButtonComponent } from './get-otp-button.component';

describe('GetOtpButtonComponent', () => {
  let component: GetOtpButtonComponent;
  let fixture: ComponentFixture<GetOtpButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOtpButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOtpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
