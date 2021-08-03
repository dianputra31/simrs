import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusDokterLuarDialogComponent } from './hapus-dokter-luar-dialog.component';

describe('HapusDokterLuarDialogComponent', () => {
  let component: HapusDokterLuarDialogComponent;
  let fixture: ComponentFixture<HapusDokterLuarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapusDokterLuarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusDokterLuarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
