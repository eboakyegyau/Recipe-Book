import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCarListComponent } from './dealer-car-list.component';

describe('DealerCarListComponent', () => {
  let component: DealerCarListComponent;
  let fixture: ComponentFixture<DealerCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
