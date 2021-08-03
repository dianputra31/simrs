import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusKaryawanDialogComponent } from './hapus-karyawan-dialog.component';

describe('HapusKaryawanDialogComponent', () => {
  let component: HapusKaryawanDialogComponent;
  let fixture: ComponentFixture<HapusKaryawanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapusKaryawanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusKaryawanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
