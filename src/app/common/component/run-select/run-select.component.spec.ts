import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunSelectComponent } from './run-select.component';

describe('RunSelectComponent', () => {
  let component: RunSelectComponent;
  let fixture: ComponentFixture<RunSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
