import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplierDialogComponent } from './edit-supplier-dialog.component';

describe('EditSupplierDialogComponent', () => {
  let component: EditSupplierDialogComponent;
  let fixture: ComponentFixture<EditSupplierDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSupplierDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupplierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
