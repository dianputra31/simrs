import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxTwoComponent } from './check-box-two.component';

describe('CheckBoxTwoComponent', () => {
  let component: CheckBoxTwoComponent;
  let fixture: ComponentFixture<CheckBoxTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
