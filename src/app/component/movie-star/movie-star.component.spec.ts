import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStarComponent } from './movie-star.component';

describe('MovieStarComponent', () => {
  let component: MovieStarComponent;
  let fixture: ComponentFixture<MovieStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
