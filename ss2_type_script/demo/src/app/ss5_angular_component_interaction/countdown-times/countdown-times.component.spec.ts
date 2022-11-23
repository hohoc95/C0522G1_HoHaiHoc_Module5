import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimesComponent } from './countdown-times.component';

describe('CountdownTimesComponent', () => {
  let component: CountdownTimesComponent;
  let fixture: ComponentFixture<CountdownTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
