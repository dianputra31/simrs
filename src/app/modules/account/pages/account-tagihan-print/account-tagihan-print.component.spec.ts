import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTagihanPrintComponent } from './account-tagihan-print.component';

describe('AccountTagihanPrintComponent', () => {
  let component: AccountTagihanPrintComponent;
  let fixture: ComponentFixture<AccountTagihanPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTagihanPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTagihanPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
