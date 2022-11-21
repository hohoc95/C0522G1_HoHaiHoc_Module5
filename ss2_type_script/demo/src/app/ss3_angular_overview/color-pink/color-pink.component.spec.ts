import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPinkComponent } from './color-pink.component';

describe('ColorPinkComponent', () => {
  let component: ColorPinkComponent;
  let fixture: ComponentFixture<ColorPinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
