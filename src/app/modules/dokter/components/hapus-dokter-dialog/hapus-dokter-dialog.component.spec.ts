import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusDokterDialogComponent } from './hapus-dokter-dialog.component';

describe('HapusDokterDialogComponent', () => {
  let component: HapusDokterDialogComponent;
  let fixture: ComponentFixture<HapusDokterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapusDokterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusDokterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
