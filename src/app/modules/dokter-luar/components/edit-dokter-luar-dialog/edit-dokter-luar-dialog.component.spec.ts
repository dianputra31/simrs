import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDokterLuarDialogComponent } from './edit-dokter-luar-dialog.component';

describe('EditDokterLuarDialogComponent', () => {
  let component: EditDokterLuarDialogComponent;
  let fixture: ComponentFixture<EditDokterLuarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDokterLuarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDokterLuarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
