import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingComponentComponent } from './bidding-component.component';

describe('BiddingComponentComponent', () => {
  let component: BiddingComponentComponent;
  let fixture: ComponentFixture<BiddingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
