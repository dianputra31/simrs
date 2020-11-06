import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KirimUlangButtonComponent } from './kirim-ulang-button.component';

describe('KirimUlangButtonComponent', () => {
  let component: KirimUlangButtonComponent;
  let fixture: ComponentFixture<KirimUlangButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirimUlangButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KirimUlangButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
