import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaTheaterComponentComponent } from './cinema-theater-component.component';

describe('CinemaTheaterComponentComponent', () => {
  let component: CinemaTheaterComponentComponent;
  let fixture: ComponentFixture<CinemaTheaterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaTheaterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaTheaterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
