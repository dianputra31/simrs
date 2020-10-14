import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessLogoComponent } from './process-logo.component';

describe('ProcessLogoComponent', () => {
  let component: ProcessLogoComponent;
  let fixture: ComponentFixture<ProcessLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
