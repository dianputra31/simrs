import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCard2Component } from './login-card2.component';

describe('LoginCard2Component', () => {
  let component: LoginCard2Component;
  let fixture: ComponentFixture<LoginCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
