import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailLayoutNoTokenComponent } from './transaction-detail-layout-no-token.component';

describe('TransactionDetailLayoutNoTokenComponent', () => {
  let component: TransactionDetailLayoutNoTokenComponent;
  let fixture: ComponentFixture<TransactionDetailLayoutNoTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailLayoutNoTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailLayoutNoTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
