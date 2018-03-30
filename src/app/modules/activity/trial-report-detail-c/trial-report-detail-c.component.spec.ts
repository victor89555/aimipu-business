import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialReportDetailCComponent } from './trial-report-detail-c.component';

describe('TrialReportDetailCComponent', () => {
  let component: TrialReportDetailCComponent;
  let fixture: ComponentFixture<TrialReportDetailCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialReportDetailCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialReportDetailCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
