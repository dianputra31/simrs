import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayout3Component } from './login-layout3.component';

describe('LoginLayout3Component', () => {
  let component: LoginLayout3Component;
  let fixture: ComponentFixture<LoginLayout3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLayout3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
