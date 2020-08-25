import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagihanTableComponent } from './tagihan-table.component';

describe('TagihanTableComponent', () => {
  let component: TagihanTableComponent;
  let fixture: ComponentFixture<TagihanTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagihanTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagihanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
