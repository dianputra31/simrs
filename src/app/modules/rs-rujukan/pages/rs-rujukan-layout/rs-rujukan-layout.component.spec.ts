import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsRujukanLayoutComponent } from './rs-rujukan-layout.component';

describe('RsRujukanLayoutComponent', () => {
  let component: RsRujukanLayoutComponent;
  let fixture: ComponentFixture<RsRujukanLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsRujukanLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsRujukanLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
