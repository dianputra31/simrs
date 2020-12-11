import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDatepickerComponent } from './dashboard-datepicker.component';

describe('DashboardDatepickerComponent', () => {
  let component: DashboardDatepickerComponent;
  let fixture: ComponentFixture<DashboardDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
