import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelWithNotifComponent } from './label-with-notif.component';

describe('LabelWithNotifComponent', () => {
  let component: LabelWithNotifComponent;
  let fixture: ComponentFixture<LabelWithNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelWithNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelWithNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
