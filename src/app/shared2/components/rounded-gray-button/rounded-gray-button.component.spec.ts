import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedGrayButtonComponent } from './rounded-gray-button.component';

describe('RoundedGrayButtonComponent', () => {
  let component: RoundedGrayButtonComponent;
  let fixture: ComponentFixture<RoundedGrayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedGrayButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedGrayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
