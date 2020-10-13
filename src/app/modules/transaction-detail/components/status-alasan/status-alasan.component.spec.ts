import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAlasanComponent } from './status-alasan.component';

describe('StatusAlasanComponent', () => {
  let component: StatusAlasanComponent;
  let fixture: ComponentFixture<StatusAlasanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusAlasanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAlasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
