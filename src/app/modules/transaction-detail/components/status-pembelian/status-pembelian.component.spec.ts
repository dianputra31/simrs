import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPembelianComponent } from './status-pembelian.component';

describe('StatusPembelianComponent', () => {
  let component: StatusPembelianComponent;
  let fixture: ComponentFixture<StatusPembelianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPembelianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
