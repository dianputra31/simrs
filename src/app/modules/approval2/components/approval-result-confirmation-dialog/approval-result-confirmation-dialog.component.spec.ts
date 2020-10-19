import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalResultConfirmationDialogComponent } from './approval-result-confirmation-dialog.component';

describe('ApprovalResultConfirmationDialogComponent', () => {
  let component: ApprovalResultConfirmationDialogComponent;
  let fixture: ComponentFixture<ApprovalResultConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalResultConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalResultConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
