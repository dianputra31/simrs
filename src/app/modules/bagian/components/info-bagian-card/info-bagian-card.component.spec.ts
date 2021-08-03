import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBagianCardComponent } from './info-bagian-card.component';

describe('InfoBagianCardComponent', () => {
  let component: InfoBagianCardComponent;
  let fixture: ComponentFixture<InfoBagianCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBagianCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBagianCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
