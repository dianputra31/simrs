import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokterLuarLayoutComponent } from './dokter-luar-layout.component';

describe('DokterLuarLayoutComponent', () => {
  let component: DokterLuarLayoutComponent;
  let fixture: ComponentFixture<DokterLuarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokterLuarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokterLuarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
