import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxItemComponent } from './check-box-item.component';

describe('CheckBoxItemComponent', () => {
  let component: CheckBoxItemComponent;
  let fixture: ComponentFixture<CheckBoxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
