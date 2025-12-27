import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashComponent } from './movie-dash.component';

describe('MovieDashComponent', () => {
  let component: MovieDashComponent;
  let fixture: ComponentFixture<MovieDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
