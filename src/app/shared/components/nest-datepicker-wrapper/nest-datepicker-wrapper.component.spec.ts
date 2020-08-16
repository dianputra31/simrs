import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestDatepickerWrapperComponent } from './nest-datepicker-wrapper.component';

describe('NestDatepickerWrapperComponent', () => {
  let component: NestDatepickerWrapperComponent;
  let fixture: ComponentFixture<NestDatepickerWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestDatepickerWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestDatepickerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
