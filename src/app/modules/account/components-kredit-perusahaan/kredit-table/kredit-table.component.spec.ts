import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreditTableComponent } from './kredit-table.component';

describe('KreditTableComponent', () => {
  let component: KreditTableComponent;
  let fixture: ComponentFixture<KreditTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreditTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
