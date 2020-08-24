import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountKreditPerusahaanComponent } from './account-kredit-perusahaan.component';

describe('AccountKreditPerusahaanComponent', () => {
  let component: AccountKreditPerusahaanComponent;
  let fixture: ComponentFixture<AccountKreditPerusahaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountKreditPerusahaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountKreditPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
