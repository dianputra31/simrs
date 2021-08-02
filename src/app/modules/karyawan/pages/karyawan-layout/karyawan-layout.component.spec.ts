import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawanLayoutComponent } from './karyawan-layout.component';

describe('KaryawanLayoutComponent', () => {
  let component: KaryawanLayoutComponent;
  let fixture: ComponentFixture<KaryawanLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaryawanLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryawanLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
