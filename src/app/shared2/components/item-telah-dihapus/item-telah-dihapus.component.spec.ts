import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTelahDihapusComponent } from './item-telah-dihapus.component';

describe('ItemTelahDihapusComponent', () => {
  let component: ItemTelahDihapusComponent;
  let fixture: ComponentFixture<ItemTelahDihapusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTelahDihapusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTelahDihapusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
