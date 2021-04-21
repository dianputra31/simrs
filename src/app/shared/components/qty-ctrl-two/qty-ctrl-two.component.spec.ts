import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtyCtrlTwoComponent } from './qty-ctrl-two.component';

describe('QtyCtrlTwoComponent', () => {
  let component: QtyCtrlTwoComponent;
  let fixture: ComponentFixture<QtyCtrlTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtyCtrlTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtyCtrlTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
