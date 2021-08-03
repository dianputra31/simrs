import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusBagianDialogComponent } from './hapus-bagian-dialog.component';

describe('HapusBagianDialogComponent', () => {
  let component: HapusBagianDialogComponent;
  let fixture: ComponentFixture<HapusBagianDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapusBagianDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusBagianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
