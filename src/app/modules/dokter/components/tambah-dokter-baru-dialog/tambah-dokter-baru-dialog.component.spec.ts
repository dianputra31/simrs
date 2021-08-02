import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDokterBaruDialogComponent } from './tambah-dokter-baru-dialog.component';

describe('TambahDokterBaruDialogComponent', () => {
  let component: TambahDokterBaruDialogComponent;
  let fixture: ComponentFixture<TambahDokterBaruDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahDokterBaruDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahDokterBaruDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
