import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductLayoutNoTokenComponent } from './detail-product-layout-no-token.component';

describe('DetailProductLayoutNoTokenComponent', () => {
  let component: DetailProductLayoutNoTokenComponent;
  let fixture: ComponentFixture<DetailProductLayoutNoTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProductLayoutNoTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductLayoutNoTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
