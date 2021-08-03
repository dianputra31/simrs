import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagianLayoutComponent } from './bagian-layout.component';

describe('BagianLayoutComponent', () => {
  let component: BagianLayoutComponent;
  let fixture: ComponentFixture<BagianLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagianLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagianLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
