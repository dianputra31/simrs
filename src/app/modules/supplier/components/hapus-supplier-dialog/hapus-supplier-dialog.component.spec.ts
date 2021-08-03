import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusSupplierDialogComponent } from './hapus-supplier-dialog.component';

describe('HapusSupplierDialogComponent', () => {
  let component: HapusSupplierDialogComponent;
  let fixture: ComponentFixture<HapusSupplierDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapusSupplierDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusSupplierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
