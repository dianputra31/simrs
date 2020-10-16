import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalLayoutComponent } from './approval-layout.component';

describe('ApprovalLayoutComponent', () => {
  let component: ApprovalLayoutComponent;
  let fixture: ComponentFixture<ApprovalLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
