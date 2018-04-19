import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaTheaterProfileComponent } from './cinema-theater-profile.component';

describe('CinemaTheaterProfileComponent', () => {
  let component: CinemaTheaterProfileComponent;
  let fixture: ComponentFixture<CinemaTheaterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaTheaterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaTheaterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
