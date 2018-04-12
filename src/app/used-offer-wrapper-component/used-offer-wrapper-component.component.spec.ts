import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedOfferWrapperComponentComponent } from './used-offer-wrapper-component.component';

describe('UsedOfferWrapperComponentComponent', () => {
  let component: UsedOfferWrapperComponentComponent;
  let fixture: ComponentFixture<UsedOfferWrapperComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedOfferWrapperComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedOfferWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
