import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahKaryawanBaruDialogComponent } from './tambah-karyawan-baru-dialog.component';

describe('TambahKaryawanBaruDialogComponent', () => {
  let component: TambahKaryawanBaruDialogComponent;
  let fixture: ComponentFixture<TambahKaryawanBaruDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahKaryawanBaruDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahKaryawanBaruDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
