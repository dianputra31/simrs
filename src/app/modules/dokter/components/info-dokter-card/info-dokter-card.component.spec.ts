import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDokterCardComponent } from './info-dokter-card.component';

describe('InfoDokterCardComponent', () => {
  let component: InfoDokterCardComponent;
  let fixture: ComponentFixture<InfoDokterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDokterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDokterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
