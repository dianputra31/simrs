import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalConfirmationDialogComponent } from './approval-confirmation-dialog.component';

describe('ApprovalConfirmationDialogComponent', () => {
  let component: ApprovalConfirmationDialogComponent;
  let fixture: ComponentFixture<ApprovalConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
