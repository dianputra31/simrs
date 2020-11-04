import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayout2Component } from './login-layout2.component';

describe('LoginLayout2Component', () => {
  let component: LoginLayout2Component;
  let fixture: ComponentFixture<LoginLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLayout2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
