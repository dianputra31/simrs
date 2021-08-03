import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKaryawanDialogComponent } from './edit-karyawan-dialog.component';

describe('EditKaryawanDialogComponent', () => {
  let component: EditKaryawanDialogComponent;
  let fixture: ComponentFixture<EditKaryawanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKaryawanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKaryawanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
