import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOfferComponentComponent } from './new-offer-component.component';

describe('NewOfferComponentComponent', () => {
  let component: NewOfferComponentComponent;
  let fixture: ComponentFixture<NewOfferComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOfferComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOfferComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
