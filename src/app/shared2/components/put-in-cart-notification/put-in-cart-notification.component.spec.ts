import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutInCartNotificationComponent } from './put-in-cart-notification.component';

describe('PutInCartNotificationComponent', () => {
  let component: PutInCartNotificationComponent;
  let fixture: ComponentFixture<PutInCartNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutInCartNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutInCartNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
