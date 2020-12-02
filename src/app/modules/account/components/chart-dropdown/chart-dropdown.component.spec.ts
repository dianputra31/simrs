import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDropdownComponent } from './chart-dropdown.component';

describe('ChartDropdownComponent', () => {
  let component: ChartDropdownComponent;
  let fixture: ComponentFixture<ChartDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
