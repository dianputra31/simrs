import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocationSectionComponent } from './dialog-location-section.component';

describe('DialogLocationSectionComponent', () => {
  let component: DialogLocationSectionComponent;
  let fixture: ComponentFixture<DialogLocationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLocationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLocationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
