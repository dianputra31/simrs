import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoKaryawanCardComponent } from './info-karyawan-card.component';

describe('InfoKaryawanCardComponent', () => {
  let component: InfoKaryawanCardComponent;
  let fixture: ComponentFixture<InfoKaryawanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoKaryawanCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoKaryawanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
