import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCard2Component } from './item-card2.component';

describe('ItemCard2Component', () => {
  let component: ItemCard2Component;
  let fixture: ComponentFixture<ItemCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
