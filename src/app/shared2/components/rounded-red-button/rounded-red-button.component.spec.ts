import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedRedButtonComponent } from './rounded-red-button.component';

describe('RoundedRedButtonComponent', () => {
  let component: RoundedRedButtonComponent;
  let fixture: ComponentFixture<RoundedRedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedRedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedRedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
