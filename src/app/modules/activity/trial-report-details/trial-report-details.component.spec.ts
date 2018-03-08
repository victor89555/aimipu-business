import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialReportDetailsComponent } from './trial-report-details.component';

describe('TrialReportDetailsComponent', () => {
  let component: TrialReportDetailsComponent;
  let fixture: ComponentFixture<TrialReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
