import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSummaryDropdownComponent } from './item-summary-dropdown.component';

describe('ItemSummaryDropdownComponent', () => {
  let component: ItemSummaryDropdownComponent;
  let fixture: ComponentFixture<ItemSummaryDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSummaryDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSummaryDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
