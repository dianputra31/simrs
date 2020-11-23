import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelesaiConfirmationDialogComponent } from './selesai-confirmation-dialog.component';

describe('SelesaiConfirmationDialogComponent', () => {
  let component: SelesaiConfirmationDialogComponent;
  let fixture: ComponentFixture<SelesaiConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelesaiConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelesaiConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
