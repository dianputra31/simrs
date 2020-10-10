import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilihSemuaComponent } from './pilih-semua.component';

describe('PilihSemuaComponent', () => {
  let component: PilihSemuaComponent;
  let fixture: ComponentFixture<PilihSemuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihSemuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilihSemuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
