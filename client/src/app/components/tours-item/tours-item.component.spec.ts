import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursItemComponent } from './tours-item.component';

describe('ToursItemComponent', () => {
  let component: ToursItemComponent;
  let fixture: ComponentFixture<ToursItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
