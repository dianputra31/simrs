import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSupplierCardComponent } from './info-supplier-card.component';

describe('InfoSupplierCardComponent', () => {
  let component: InfoSupplierCardComponent;
  let fixture: ComponentFixture<InfoSupplierCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSupplierCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSupplierCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
