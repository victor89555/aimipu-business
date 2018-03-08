import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagementPendingComponent } from './activity-management-pending.component';

describe('ActivityManagementPendingComponent', () => {
  let component: ActivityManagementPendingComponent;
  let fixture: ComponentFixture<ActivityManagementPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityManagementPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagementPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
