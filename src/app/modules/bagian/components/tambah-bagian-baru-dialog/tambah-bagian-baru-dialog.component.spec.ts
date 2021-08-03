import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahBagianBaruDialogComponent } from './tambah-bagian-baru-dialog.component';

describe('TambahBagianBaruDialogComponent', () => {
  let component: TambahBagianBaruDialogComponent;
  let fixture: ComponentFixture<TambahBagianBaruDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahBagianBaruDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahBagianBaruDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
