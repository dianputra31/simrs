import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRejectDialogComponent } from './approval-reject-dialog.component';

describe('ApprovalRejectDialogComponent', () => {
  let component: ApprovalRejectDialogComponent;
  let fixture: ComponentFixture<ApprovalRejectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalRejectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRejectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
