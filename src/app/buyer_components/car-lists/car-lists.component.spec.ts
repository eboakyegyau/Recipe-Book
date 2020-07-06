import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListsComponent } from './car-lists.component';

describe('CarListsComponent', () => {
  let component: CarListsComponent;
  let fixture: ComponentFixture<CarListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
