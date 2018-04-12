import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanZoneComponentComponent } from './fan-zone-component.component';

describe('FanZoneComponentComponent', () => {
  let component: FanZoneComponentComponent;
  let fixture: ComponentFixture<FanZoneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanZoneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanZoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
