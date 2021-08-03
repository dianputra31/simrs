import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDokterLuarBaruDialogComponent } from './tambah-dokter-luar-baru-dialog.component';

describe('TambahDokterLuarBaruDialogComponent', () => {
  let component: TambahDokterLuarBaruDialogComponent;
  let fixture: ComponentFixture<TambahDokterLuarBaruDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahDokterLuarBaruDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahDokterLuarBaruDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
