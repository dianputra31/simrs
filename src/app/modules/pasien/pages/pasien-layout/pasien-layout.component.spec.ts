import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasienLayoutComponent } from './pasien-layout.component';

describe('PasienLayoutComponent', () => {
  let component: PasienLayoutComponent;
  let fixture: ComponentFixture<PasienLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasienLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasienLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
