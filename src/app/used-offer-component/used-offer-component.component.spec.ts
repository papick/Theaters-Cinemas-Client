import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedOfferComponentComponent } from './used-offer-component.component';

describe('UsedOfferComponentComponent', () => {
  let component: UsedOfferComponentComponent;
  let fixture: ComponentFixture<UsedOfferComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedOfferComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedOfferComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
