import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamarLayoutComponent } from './kamar-layout.component';

describe('KamarLayoutComponent', () => {
  let component: KamarLayoutComponent;
  let fixture: ComponentFixture<KamarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
