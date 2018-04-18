import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFanZoneNotifyWrapperComponent } from './admin-fan-zone-notify-wrapper.component';

describe('AdminFanZoneNotifyWrapperComponent', () => {
  let component: AdminFanZoneNotifyWrapperComponent;
  let fixture: ComponentFixture<AdminFanZoneNotifyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFanZoneNotifyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFanZoneNotifyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
