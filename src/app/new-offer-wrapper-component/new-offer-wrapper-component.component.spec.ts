import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOfferWrapperComponentComponent } from './new-offer-wrapper-component.component';

describe('NewOfferWrapperComponentComponent', () => {
  let component: NewOfferWrapperComponentComponent;
  let fixture: ComponentFixture<NewOfferWrapperComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOfferWrapperComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOfferWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
