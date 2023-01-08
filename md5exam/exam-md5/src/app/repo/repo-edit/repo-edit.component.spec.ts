import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoEditComponent } from './repo-edit.component';

describe('RepoEditComponent', () => {
  let component: RepoEditComponent;
  let fixture: ComponentFixture<RepoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
