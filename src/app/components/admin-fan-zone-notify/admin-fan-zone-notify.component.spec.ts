import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFanZoneNotifyComponent } from './admin-fan-zone-notify.component';

describe('AdminFanZoneNotifyComponent', () => {
  let component: AdminFanZoneNotifyComponent;
  let fixture: ComponentFixture<AdminFanZoneNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFanZoneNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFanZoneNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
