import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCreateComponent } from './repo-create.component';

describe('RepoCreateComponent', () => {
  let component: RepoCreateComponent;
  let fixture: ComponentFixture<RepoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
