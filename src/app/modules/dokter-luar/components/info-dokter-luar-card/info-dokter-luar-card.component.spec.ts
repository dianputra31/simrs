import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDokterLuarCardComponent } from './info-dokter-luar-card.component';

describe('InfoDokterLuarCardComponent', () => {
  let component: InfoDokterLuarCardComponent;
  let fixture: ComponentFixture<InfoDokterLuarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDokterLuarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDokterLuarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
