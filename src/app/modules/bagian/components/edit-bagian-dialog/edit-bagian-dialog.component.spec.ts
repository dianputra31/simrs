import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBagianDialogComponent } from './edit-bagian-dialog.component';

describe('EditBagianDialogComponent', () => {
  let component: EditBagianDialogComponent;
  let fixture: ComponentFixture<EditBagianDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBagianDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBagianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
