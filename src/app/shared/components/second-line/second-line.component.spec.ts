import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLineComponent } from './second-line.component';

describe('SecondLineComponent', () => {
  let component: SecondLineComponent;
  let fixture: ComponentFixture<SecondLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
