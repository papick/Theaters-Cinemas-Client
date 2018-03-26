import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInFormComponentComponent } from './log-in-form-component.component';

describe('LogInFormComponentComponent', () => {
  let component: LogInFormComponentComponent;
  let fixture: ComponentFixture<LogInFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
