import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCartPriceComponent } from './box-cart-price.component';

describe('BoxCartPriceComponent', () => {
  let component: BoxCartPriceComponent;
  let fixture: ComponentFixture<BoxCartPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxCartPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCartPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
