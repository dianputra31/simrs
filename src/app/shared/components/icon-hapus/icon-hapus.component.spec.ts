import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHapusComponent } from './icon-hapus.component';

describe('IconHapusComponent', () => {
  let component: IconHapusComponent;
  let fixture: ComponentFixture<IconHapusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconHapusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHapusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
