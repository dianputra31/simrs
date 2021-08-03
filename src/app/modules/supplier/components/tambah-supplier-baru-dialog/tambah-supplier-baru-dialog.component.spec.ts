import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSupplierBaruDialogComponent } from './tambah-supplier-baru-dialog.component';

describe('TambahSupplierBaruDialogComponent', () => {
  let component: TambahSupplierBaruDialogComponent;
  let fixture: ComponentFixture<TambahSupplierBaruDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahSupplierBaruDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahSupplierBaruDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
