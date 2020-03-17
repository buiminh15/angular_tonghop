import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitFieldsComponent } from './limit-fields.component';

describe('LimitFieldsComponent', () => {
  let component: LimitFieldsComponent;
  let fixture: ComponentFixture<LimitFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
