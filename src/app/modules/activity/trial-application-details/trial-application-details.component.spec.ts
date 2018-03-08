import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialApplicationDetailsComponent } from './trial-application-details.component';

describe('TrialApplicationDetailsComponent', () => {
  let component: TrialApplicationDetailsComponent;
  let fixture: ComponentFixture<TrialApplicationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialApplicationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
