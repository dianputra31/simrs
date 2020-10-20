import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressWithNotifComponent } from './address-with-notif.component';

describe('AddressWithNotifComponent', () => {
  let component: AddressWithNotifComponent;
  let fixture: ComponentFixture<AddressWithNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressWithNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressWithNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
