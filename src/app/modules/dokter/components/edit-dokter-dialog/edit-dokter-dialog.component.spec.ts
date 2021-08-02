import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDokterDialogComponent } from './edit-dokter-dialog.component';

describe('EditDokterDialogComponent', () => {
  let component: EditDokterDialogComponent;
  let fixture: ComponentFixture<EditDokterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDokterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDokterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
