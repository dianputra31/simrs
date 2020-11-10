import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWithNotifComponent } from './logo-with-notif.component';

describe('LogoWithNotifComponent', () => {
  let component: LogoWithNotifComponent;
  let fixture: ComponentFixture<LogoWithNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoWithNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoWithNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
