import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSupplierDialogComponent } from './tambah-supplier-dialog.component';

describe('TambahSupplierDialogComponent', () => {
  let component: TambahSupplierDialogComponent;
  let fixture: ComponentFixture<TambahSupplierDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahSupplierDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahSupplierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
