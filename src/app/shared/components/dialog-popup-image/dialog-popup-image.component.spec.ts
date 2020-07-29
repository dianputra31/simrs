import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPopupImageComponent } from './dialog-popup-image.component';

describe('DialogPopupImageComponent', () => {
  let component: DialogPopupImageComponent;
  let fixture: ComponentFixture<DialogPopupImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPopupImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPopupImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
