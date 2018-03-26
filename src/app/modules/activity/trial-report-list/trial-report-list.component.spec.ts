import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialReportListComponent } from './trial-report-list.component';

describe('TrialReportListComponent', () => {
  let component: TrialReportListComponent;
  let fixture: ComponentFixture<TrialReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
