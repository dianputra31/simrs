import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlamatDialogComponent } from './edit-alamat-dialog.component';

describe('EditAlamatDialogComponent', () => {
  let component: EditAlamatDialogComponent;
  let fixture: ComponentFixture<EditAlamatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlamatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlamatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
