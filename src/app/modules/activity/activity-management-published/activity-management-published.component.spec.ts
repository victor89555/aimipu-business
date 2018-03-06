import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagementPublishedComponent } from './activity-management-published.component';

describe('ActivityManagementPublishedComponent', () => {
  let component: ActivityManagementPublishedComponent;
  let fixture: ComponentFixture<ActivityManagementPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityManagementPublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagementPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
