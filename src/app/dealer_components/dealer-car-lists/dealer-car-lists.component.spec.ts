import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCarListsComponent } from './dealer-car-lists.component';

describe('DealerCarListsComponent', () => {
  let component: DealerCarListsComponent;
  let fixture: ComponentFixture<DealerCarListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerCarListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerCarListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
