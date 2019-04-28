import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatDetailsComponent } from './repeat-details.component';

describe('RepeatDetailsComponent', () => {
  let component: RepeatDetailsComponent;
  let fixture: ComponentFixture<RepeatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
