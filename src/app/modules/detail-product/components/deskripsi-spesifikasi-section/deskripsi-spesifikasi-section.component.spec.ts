import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskripsiSpesifikasiSectionComponent } from './deskripsi-spesifikasi-section.component';

describe('DeskripsiSpesifikasiSectionComponent', () => {
  let component: DeskripsiSpesifikasiSectionComponent;
  let fixture: ComponentFixture<DeskripsiSpesifikasiSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskripsiSpesifikasiSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskripsiSpesifikasiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
